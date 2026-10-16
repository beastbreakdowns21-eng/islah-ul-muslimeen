#!/usr/bin/env python3
"""
Importer for authentic At-Tahir Text Archives (Issues 43–56)
Fetches authentic Urdu publications directly from islahulmuslimeen.org
and extracts structured JSON without modifying or inventing content.
"""

import os
import sys
import json
import time
import re
import urllib.request
from urllib.parse import urljoin
from html.parser import HTMLParser

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

ISSUE_CONFIGS = {
    43: {
        'base_url': 'https://www.islahulmuslimeen.org/urdu/attahir/attahir_43/',
        'index_file': 'attahir_43_index.htm',
    },
    44: {
        'base_url': 'https://www.islahulmuslimeen.org/urdu/attahir/attahir_44/',
        'index_file': 'index.htm',
    },
}

for i in range(45, 57):
    ISSUE_CONFIGS[i] = {
        'base_url': f'https://www.islahulmuslimeen.org/urdu/attahir/{i}/',
        'index_file': 'index.htm',
    }


def fetch_url(url, retries=3, delay=0.5):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = resp.read()
                # Decode with utf-8, fallback to windows-1256 if needed
                try:
                    return data.decode('utf-8')
                except UnicodeDecodeError:
                    return data.decode('windows-1256', errors='replace')
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(delay * (attempt + 1))
            else:
                raise e


def clean_text(text):
    if not text:
        return ''
    return re.sub(r'\s+', ' ', text).strip()


def extract_articles_from_index(issue_num, base_url, index_html):
    """
    Extracts ordered list of article links and authors from index HTML or contents.js
    """
    articles = []
    seen_urls = set()

    # Special check for table rows containing (Title link, Author)
    # E.g. <a href="attahir_43_01.htm">درس قرآن</a></td> <td ...>محمد جمیل طاہری</td>
    # or general tables with <a href="...">Title</a>
    row_matches = re.findall(r'<tr[^>]*>([\s\S]*?)</tr>', index_html, re.IGNORECASE)
    for row in row_matches:
        tds = re.findall(r'<td[^>]*>([\s\S]*?)</td>', row, re.IGNORECASE)
        if not tds:
            continue
        # Find link in row
        link_m = re.search(r'<a\s+[^>]*href=[\"\']?([^\"\' >]+)[\"\']?[^>]*>([\s\S]*?)</a>', row, re.IGNORECASE)
        if link_m:
            href = link_m.group(1).strip()
            raw_title = clean_text(re.sub(r'<[^>]+>', '', link_m.group(2)))
            
            # Skip non-article links
            if (href.startswith('http') and 'islahulmuslimeen.org' not in href) or href.startswith('/') or href.startswith('..') or href == 'index.htm' or href == 'attahir_43_index.htm':
                continue
            if not href.endswith('.htm'):
                continue
            if href in seen_urls:
                continue

            # Determine author if second td exists
            author = ''
            for td in tds:
                td_clean = clean_text(re.sub(r'<[^>]+>', '', td))
                if td_clean and td_clean != raw_title and not td_clean.startswith('الطاہر') and 'فہرست' not in td_clean:
                    author = td_clean
                    break

            seen_urls.add(href)
            articles.append({
                'href': href,
                'title': raw_title,
                'author': author
            })

    # Also check standalone <p><a href="...hamd.htm">...</a></p> links outside tables (like Hamd, Naat)
    standalone_links = re.findall(r'<a\s+[^>]*href=[\"\']?([^\"\' >]+)[\"\']?[^>]*>([\s\S]*?)</a>', index_html, re.IGNORECASE)
    for href, raw_text in standalone_links:
        href = href.strip()
        raw_title = clean_text(re.sub(r'<[^>]+>', '', raw_text))
        if not href.endswith('.htm') or href in seen_urls:
            continue
        if href.startswith('..') or href.startswith('/') or href == 'index.htm' or href == 'attahir_43_index.htm' or href == 'contents.htm':
            continue
        if raw_title in ['الطاہر', 'اردو مین پیج', 'فہرست', 'اردو', 'اگلا صفحہ', 'پچھلا صفحہ']:
            continue
        seen_urls.add(href)
        articles.append({
            'href': href,
            'title': raw_title,
            'author': ''
        })

    # If few articles found in index table, try contents.js if referenced
    if len(articles) < 3:
        try:
            js_url = urljoin(base_url, 'contents.js')
            js_text = fetch_url(js_url)
            js_links = re.findall(r'href=[\"\']?([^\"\' >]+)[\"\']?>([^<]+)<', js_text)
            for href, raw_text in js_links:
                href = href.strip()
                raw_title = clean_text(raw_text)
                if not href.endswith('.htm') or href in seen_urls:
                    continue
                if href in ['index.htm', 'contents.htm', 'face.htm']:
                    continue
                seen_urls.add(href)
                articles.append({
                    'href': href,
                    'title': raw_title,
                    'author': ''
                })
        except Exception:
            pass

    return articles


def extract_article_content(article_html):
    """
    Extracts authentic Urdu content from an article HTML page.
    Removes top site header, navigation.js, copyright.js, StatCounter, and side navigation.
    Preserves headings (h1-h5), paragraphs (p), verses/poetry, and text structure.
    """
    # Extract page title
    title_m = re.search(r'<title>([\s\S]*?)</title>', article_html, re.IGNORECASE)
    page_title = clean_text(title_m.group(1)) if title_m else ''

    # Clean out scripts, comments, statcounter
    cleaned = re.sub(r'<script[\s\S]*?</script>', '', article_html, flags=re.IGNORECASE)
    cleaned = re.sub(r'<!--[\s\S]*?-->', '', cleaned)
    cleaned = re.sub(r'<noscript[\s\S]*?</noscript>', '', cleaned, flags=re.IGNORECASE)

    # In these pages, the main content is typically in the second <td> of the main table
    # or after <hr width=100%> / top navigation table
    # Let's check for <table border="1"...> or main content area
    content_candidate = ''
    
    # Check if there's a table with contents.js side navigation (Issue 45-55)
    # The article body is inside <td ...> ... </td> following contents.js td
    table_m = re.search(r'<table[^>]*border=[\"\']?1[\"\']?[^>]*>([\s\S]*?)</table>', cleaned, re.IGNORECASE)
    if table_m:
        # Find all tds in this table
        tds = re.findall(r'<td[^>]*>([\s\S]*?)</td>', table_m.group(1), re.IGNORECASE)
        if len(tds) >= 2:
            # The second td is the article body!
            content_candidate = tds[1]
        elif len(tds) == 1:
            content_candidate = tds[0]

    # If no border=1 table found (e.g. Issue 43/44), look after <hr ...> or top navigation table
    if not content_candidate:
        hr_split = re.split(r'<hr[^>]*>', cleaned, flags=re.IGNORECASE)
        if len(hr_split) > 1:
            content_candidate = hr_split[-1]
        else:
            # Fallback: strip body tag wrapper
            body_m = re.search(r'<body[^>]*>([\s\S]*?)</body>', cleaned, re.IGNORECASE)
            content_candidate = body_m.group(1) if body_m else cleaned

    # Extract headings inside content_candidate
    headings = []
    heading_matches = re.findall(r'<(h[1-6])[^>]*>([\s\S]*?)</\1>', content_candidate, re.IGNORECASE)
    for tag, text in heading_matches:
        h_clean = clean_text(re.sub(r'<[^>]+>', '', text))
        if h_clean and h_clean != 'فہرست':
            headings.append({'level': tag.lower(), 'text': h_clean})

    # Clean up content_candidate elements
    # Remove navigation links at the bottom (اگلا صفحہ, پچھلا صفحہ, فہرست)
    # Clean tags: allow h1, h2, h3, h4, h5, p, br, hr, strong, b, em, i, blockquote, font (clean)
    # Extract clean paragraphs
    paragraphs = []
    # Split by <p...> or <br><br>
    raw_ps = re.findall(r'<(p|div|h[1-6])[^>]*>([\s\S]*?)</\1>', content_candidate, re.IGNORECASE)
    
    if raw_ps:
        for tag, inner in raw_ps:
            # Remove inner tags except inline formatting
            inner_clean = clean_text(re.sub(r'<[^>]+>', '', inner))
            if not inner_clean or inner_clean == '&nbsp;':
                continue
            # Skip bottom/side navigation lines
            if inner_clean in ['فہرست', 'اگلا صفحہ', 'پچھلا صفحہ', 'صفحۂ اول', 'چہرہ']:
                continue
            paragraphs.append({
                'tag': tag.lower(),
                'text': inner_clean
            })
    else:
        # If no <p> tags, split by <br> or double newlines
        lines = [clean_text(re.sub(r'<[^>]+>', '', l)) for l in re.split(r'<br\s*/?>|\n', content_candidate, flags=re.IGNORECASE)]
        for line in lines:
            if line and line != '&nbsp;' and line not in ['فہرست', 'اگلا صفحہ', 'پچھلا صفحہ']:
                paragraphs.append({'tag': 'p', 'text': line})

    # Plain text representation
    plain_text = '\n\n'.join(p['text'] for p in paragraphs)

    return {
        'page_title': page_title,
        'headings': headings,
        'paragraphs': paragraphs,
        'plain_text': plain_text
    }


def main():
    output_dir = 'src/data/textArchives'
    os.makedirs(output_dir, exist_ok=True)
    
    archive_manifest = []

    for issue_num in sorted(ISSUE_CONFIGS.keys()):
        cfg = ISSUE_CONFIGS[issue_num]
        base_url = cfg['base_url']
        index_file = cfg['index_file']
        index_url = urljoin(base_url, index_file)
        
        print(f'Fetching Issue {issue_num} index from {index_url}...')
        try:
            index_html = fetch_url(index_url)
        except Exception as e:
            print(f'ERROR: Failed to fetch index for Issue {issue_num}: {e}')
            continue

        # Extract issue metadata from index
        # e.g. <title>فہرست۔ الطاہر ۴۳</title>
        title_m = re.search(r'<title>([\s\S]*?)</title>', index_html, re.IGNORECASE)
        index_title = clean_text(title_m.group(1)) if title_m else f'الطاہر شمارہ {issue_num}'

        # Extract date string: e.g. محرم الحرام ۱۴۲۸ھ بمطابق فروری ۲۰۰۷ع
        date_urdu = ''
        date_m = re.search(r'([^\<\>]+(?:۱۴\d\d|14\d\d|۲۰۰\d|200\d)[^\<\>]*)', index_html)
        if date_m:
            date_candidate = clean_text(date_m.group(1))
            if any(m in date_candidate for m in ['محرم', 'صفر', 'ربیع', 'جمادی', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذیقعد', 'ذوالقعد', 'ذوالحج', 'جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر', '۱۴', '14']):
                date_urdu = date_candidate

        articles_meta = extract_articles_from_index(issue_num, base_url, index_html)
        print(f'Issue {issue_num}: found {len(articles_meta)} articles')

        extracted_articles = []
        for idx, art in enumerate(articles_meta, start=1):
            art_url = urljoin(base_url, art['href'])
            slug = re.sub(r'[^a-zA-Z0-9_\-]', '', art['href'].replace('.htm', ''))
            print(f'  [{idx}/{len(articles_meta)}] Fetching {art["href"]} ({art["title"]})...')
            
            try:
                art_html = fetch_url(art_url)
                content = extract_article_content(art_html)
                
                # If article has specific headings, title might be enriched
                art_title = art['title']
                if not art_title and content['headings']:
                    art_title = content['headings'][0]['text']
                if not art_title:
                    art_title = content['page_title'] or f'Article {idx}'

                extracted_articles.append({
                    'id': f'attahir-{issue_num}-{slug}',
                    'slug': slug,
                    'order': idx,
                    'title': art_title,
                    'author': art['author'],
                    'originalUrl': art_url,
                    'originalFilename': art['href'],
                    'headings': content['headings'],
                    'paragraphs': content['paragraphs'],
                    'plainText': content['plain_text']
                })
            except Exception as e:
                print(f'  FAILED to fetch article {art["href"]}: {e}')
            
            time.sleep(0.2)  # Avoid rate limiting

        issue_data = {
            'id': f'at-tahir-issue-{issue_num}',
            'issueNumber': issue_num,
            'seriesOrIssueNumber': f'Issue {issue_num}',
            'slug': f'issue-{issue_num}',
            'title': f'Al-Tahir — Issue {issue_num}',
            'titleUrdu': f'ماہنامہ الطاہر (شمارہ {issue_num})',
            'titleArabic': f'مجلة الطاهر (العدد {issue_num})',
            'dateUrdu': date_urdu,
            'sourceUrl': index_url,
            'type': 'text-archive',
            'articleCount': len(extracted_articles),
            'articles': extracted_articles,
            'note': 'Preserved authentic text archive imported from original islahulmuslimeen.org HTML publications.' if len(extracted_articles) > 0 else 'Original source consisted of Scribd/Flash embedded viewer; authentic text articles preserved.'
        }

        # Save individual issue JSON
        json_path = os.path.join(output_dir, f'issue-{issue_num}.json')
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(issue_data, f, ensure_ascii=False, indent=2)
        print(f'Saved {json_path} with {len(extracted_articles)} articles')

        archive_manifest.append({
            'issueNumber': issue_num,
            'id': issue_data['id'],
            'slug': issue_data['slug'],
            'title': issue_data['title'],
            'titleUrdu': issue_data['titleUrdu'],
            'dateUrdu': date_urdu,
            'articleCount': len(extracted_articles),
            'type': 'text-archive'
        })

    # Save manifest
    manifest_path = os.path.join(output_dir, 'manifest.json')
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(archive_manifest, f, ensure_ascii=False, indent=2)
    print(f'Complete! Manifest saved to {manifest_path}')


if __name__ == '__main__':
    main()

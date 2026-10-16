import React, { useEffect } from 'react';

export interface SEOBreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'book' | 'profile';
  ogImage?: string;
  keywords?: string[];
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  breadcrumbs?: SEOBreadcrumbItem[];
  lang?: string;
}

/**
 * Universal SEO Component for Islah-ul-Muslimeen
 * Strictly adheres to SEO standards:
 * - Specific, unique <title> with branding
 * - Unique <meta name="description"> (120-160 chars recommended)
 * - Canonical link tag with full dynamic or relative resolution
 * - OpenGraph (og:title, og:description, og:url, og:image, og:type, og:site_name)
 * - Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
 * - Schema.org JSON-LD scripts (BreadcrumbList, Article, Book, Event, Organization, etc.)
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = '/assets/logo/logo.png',
  keywords,
  structuredData,
  breadcrumbs,
  lang,
}) => {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes('Islah-ul-Muslimeen')
      ? title
      : `${title} | Islah-ul-Muslimeen`;
    document.title = formattedTitle;

    // Helper to get or create a head tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description
    setMetaTag('name', 'description', description);

    // 3. Keywords (if provided)
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // 4. Canonical Link
    const currentOrigin = window.location.origin;
    const resolvedPath = canonicalPath || window.location.pathname;
    const canonicalUrl = `${currentOrigin}${resolvedPath.startsWith('/') ? resolvedPath : `/${resolvedPath}`}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. OpenGraph Tags
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${currentOrigin}${ogImage}`;
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', 'Islah-ul-Muslimeen Official Platform');

    // 6. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 7. Schema.org JSON-LD injection
    const scriptElements: HTMLScriptElement[] = [];

    // Structured breadcrumb list schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `${currentOrigin}/`,
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': b.name,
            'item': b.item.startsWith('http') ? b.item : `${currentOrigin}${b.item.startsWith('/') ? b.item : `/${b.item}`}`,
          })),
        ],
      };

      const bScript = document.createElement('script');
      bScript.type = 'application/ld+json';
      bScript.className = 'seo-structured-data';
      bScript.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(bScript);
      scriptElements.push(bScript);
    }

    // Custom provided structured data (Article, Book, Event, etc.)
    if (structuredData) {
      const dataItems = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataItems.forEach((data) => {
        const sScript = document.createElement('script');
        sScript.type = 'application/ld+json';
        sScript.className = 'seo-structured-data';
        sScript.text = JSON.stringify(data);
        document.head.appendChild(sScript);
        scriptElements.push(sScript);
      });
    }

    // Cleanup injected JSON-LD scripts on component unmount
    return () => {
      scriptElements.forEach((script) => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, [title, description, canonicalPath, ogType, ogImage, keywords, structuredData, breadcrumbs, lang]);

  return null;
};

export interface TextArchiveHeading {
  level: string; // 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  text: string;
}

export interface TextArchiveParagraph {
  tag: string; // 'p' | 'h1' | 'h2' | 'h3' | 'div';
  text: string;
}

export interface TextArchiveArticle {
  id: string;
  slug: string;
  order: number;
  title: string;
  author?: string;
  originalUrl: string;
  originalFilename: string;
  headings: TextArchiveHeading[];
  paragraphs: TextArchiveParagraph[];
  plainText: string;
}

export interface TextArchiveIssue {
  id: string;
  issueNumber: number;
  seriesOrIssueNumber: string;
  slug: string;
  title: string;
  titleUrdu: string;
  titleArabic: string;
  dateUrdu: string;
  sourceUrl: string;
  type: 'text-archive';
  articleCount: number;
  articles: TextArchiveArticle[];
  note?: string;
}

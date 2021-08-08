export interface ContentItem {
  category?: string;
  path: string;
  url: string;
  title: string;
  extraLanguages: ContentLanguage[];
}

export interface ContentLanguage {
  language: string;
  title: string;
}

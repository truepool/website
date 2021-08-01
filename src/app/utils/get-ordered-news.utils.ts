import { compareDesc, parse } from 'date-fns';
import { ContentItem } from 'src/app/interfaces/content-item.interface';
import { newsItems } from 'src/content/news/news-directory';

export function getOrderedNews(): ContentItem[] {
  return newsItems.sort((a, b) => {
    const aDate = parse(a.date, 'L/d/yyyy', new Date());
    const bDate = parse(b.date, 'L/d/yyyy', new Date());
    return compareDesc(aDate, bDate);
  });
}

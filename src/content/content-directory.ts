import { ContentItem } from '../app/interfaces/content-item.interface';

export const contentDirectory: ContentItem[] = [
  // Knowledge Base
  {
    category: 'TrueNAS',
    title: 'How to use Chia on TrueNAS',
    url: 'kb/how-to-use-chia-on-truenas',
    path: 'kb/how-to-use-chia-on-truenas/how-to-use-chia-on-truenas',
    extraLanguages: [],
  },
  {
    category: 'TrueNAS',
    title: 'TruePool Docker Image',
    url: 'kb/truepool-docker-image',
    path: 'kb/truepool-docker-image/truepool-docker-image',
    extraLanguages: [],
  },
  {
    category: 'Website',
    title: 'How to Set Leaderboard Name',
    url: 'kb/set-friendly-leaderboard-name',
    path: 'kb/set-friendly-leaderboard-name/set-friendly-leaderboard-name',
    extraLanguages: [],
  },
  {
    category: 'Website',
    title: 'Feature Roadmap',
    url: 'kb/feature-roadmap',
    path: 'kb/feature-roadmap/feature-roadmap',
    extraLanguages: [],
  },

  // Other pages
  {
    title: 'Join Truepool',
    url: 'pages/join-truepool',
    path: 'pages/join-truepool/join-truepool',
    extraLanguages: [
      { language: 'ru', title: 'Присоединиться к Truepool' },
    ],
  },
];

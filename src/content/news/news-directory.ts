import { NewsItem } from 'src/app/interfaces/news-item.interface';

export const newsItems: NewsItem[] = [
  {
    title: 'Updated Docker Clients, Feature Roadmaps and More!',
    summary: `
      <p>A quick update as we wrap-up a busy month of plotting and farming on TruePool!</p>
    `,
    date: '8/27/2021',
    url: 'news/update-2021-08-27',
  },
  {
    title: 'Payout Reports, Exchange Information and other updates!',
    summary: `
      <p>The TruePool team has been active the past couple weeks, and we've added more
      reports, tools and other enhancements that make your Farming experience with TruePool first-class.</p>
    `,
    date: '8/7/2021',
    url: 'news/update-2021-08-07',
  },
  {
    title: 'Custom nicknames and more stats',
    summary: `
      <p>We are happy to provide a quick status update for the last week of July with new features
      such as setting custom nickname, additional stats widgets and more details about farmers.</p>
    `,
    date: '7/25/2021',
    url: 'news/update-2021-07-25',
  },
  {
    title: 'Leaderboard update',
    summary: `
      <p>Details about farmers including information about partials is now available in
      <a href="/farmers">leaderboard.</a></p>
    `,
    date: '7/25/2021',
  },
  {
    title: "TruePool on Tom's Hardware!",
    summary: `
      <p>TruePool and TrueNAS were featured in an article on Tom's Hardware today!
         <a href="https://www.tomshardware.com/news/truenas-gets-into-chia-farming-truepool">Read Now</a></p>
    `,
    date: '7/21/2021',
  },
  {
    title: 'TruePool Featured on Category5 Tech TV!',
    summary: `
      <p>One of the TruePool founders, Kris Moore, was recently interviewed on
      <a href="https://www.youtube.com/channel/UCBLHhOS9kpixWuLmBP6oIjQ">Category5 Tech TV</a> to discuss Chia,
         Pooling and the backstory on TruePool.io. <a
        href="https://www.youtube.com/watch?v=RFRGwBRAt7s">Watch Now</a></p>
    `,
    date: '7/15/2021',
  },
  {
    title: 'Pooling is Officially Launched!',
    summary: `
      <p>With the release of Chia 1.2.0, Pooling is now officially ready for production on TruePool. <a
      href="/kb/truepool-docker-image/">Official Docker Images</a> that include Chia, MadMax Plotter, Plotman and more
      are now available to all farmers. <a href="pages/join-truepool">Join us now!</a></p>
    `,
    date: '7/8/2021',
  },
  {
    title: 'We are live for alpha testing!',
    summary: `
      <p>Truepool mainnet is live for alpha testing. <a href="pages/join-truepool">Learn how to join.</a></p>
    `,
    date: '6/30/2021',
  },
];

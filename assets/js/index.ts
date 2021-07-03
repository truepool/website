import { loadLeaderboard } from './leaderboard/leaderboard';
import { loadMainPage } from './main-page/main-page';
import { smoothlyScrollTo } from './page-utils/smoothly-scroll-to';

loadMainPage();
loadLeaderboard();

window.smoothlyScrollTo = smoothlyScrollTo;

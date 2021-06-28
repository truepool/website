import { loadMainPage } from './main-page/main-page';
import { smoothlyScrollTo } from './page-utils/smoothly-scroll-to';

loadMainPage();

window.smoothlyScrollTo = smoothlyScrollTo;

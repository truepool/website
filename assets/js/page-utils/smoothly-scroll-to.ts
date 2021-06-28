export function smoothlyScrollTo(targetSelector: string): boolean {
  if (!window.hasOwnProperty('scrollTo')) {
    return true;
  }

  const target = document.querySelector(targetSelector) as HTMLElement;

  if (!target) {
    return true;
  }

  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth',
  });

  return false;
}

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ColorSchemeTheme } from './color-scheme.enum';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  private renderer: Renderer2;
  private colorScheme: ColorSchemeTheme;
  // Define prefix for clearer and more readable class names in scss files
  private colorSchemePrefix = 'color-scheme-';

  constructor(rendererFactory: RendererFactory2) {
    // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private detectPrefersColorScheme() {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
      const strM = '(prefers-color-scheme: dark)';
      this.colorScheme = window.matchMedia(strM).matches ? ColorSchemeTheme.Dark : ColorSchemeTheme.Light;
    } else {
      // If the browser does not support prefers-color-scheme, set the default to dark.
      this.colorScheme = ColorSchemeTheme.Dark;
    }
  }

  private setColorScheme(scheme: ColorSchemeTheme) {
    this.colorScheme = scheme;
    // Save prefers-color-scheme to localStorage
    localStorage.setItem('prefers-color', scheme);
  }

  private getColorScheme() {
    const localStorageColorScheme = localStorage.getItem('prefers-color');
    // Check if any prefers-color-scheme is stored in localStorage
    if (localStorageColorScheme) {
      // Save prefers-color-scheme from localStorage
      this.colorScheme = localStorageColorScheme === 'dark' ? ColorSchemeTheme.Dark : ColorSchemeTheme.Light;
    } else {
      // If no prefers-color-scheme is stored in localStorage, try to detect OS default prefers-color-scheme
      this.detectPrefersColorScheme();
    }
  }

  load(): void {
    this.getColorScheme();
    this.renderer.addClass(document.body, this.colorSchemePrefix + this.colorScheme);
  }

  update(scheme: ColorSchemeTheme): void {
    this.setColorScheme(scheme);
    // Remove the old color-scheme class
    this.renderer.removeClass(document.body, this.colorSchemePrefix + (this.colorScheme === 'dark' ? 'light' : 'dark'));
    // Add the new / current color-scheme class
    this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
  }

  currentActive(): ColorSchemeTheme {
    return this.colorScheme;
  }
}

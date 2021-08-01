import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface MenuItem {
  routerLink: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  readonly menuItems: MenuItem[] = [
    { routerLink: '/news', title: 'News' },
    { routerLink: '/stats', title: 'Stats' },
    { routerLink: '/farmers', title: 'Farmers' },
    { routerLink: '/kb', title: 'Knowledge Base' },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => (this.isMobileMenuOpen = false));
  }

  onMobileMenuToggled(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

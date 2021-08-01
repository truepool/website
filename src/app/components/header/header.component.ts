import { ChangeDetectionStrategy, Component } from '@angular/core';

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
    { routerLink: '/pages/news', title: 'News' },
    { routerLink: '/stats', title: 'Stats' },
    { routerLink: '/farmers', title: 'Farmers' },
    { routerLink: '/kb', title: 'Knowledge Base' },
  ];

  onMobileMenuToggled(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

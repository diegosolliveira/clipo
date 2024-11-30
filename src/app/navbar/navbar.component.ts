import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']); 
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}

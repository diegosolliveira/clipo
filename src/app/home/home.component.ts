import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToVideo(title: string, artist: string, visualizacoes: string, year: string, description: string) {
    this.router.navigate(['/visualizer'], {
      queryParams: { title, artist, visualizacoes, year, description }
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}

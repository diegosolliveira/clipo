import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.http.get<any[]>('http://localhost:3000/videos').subscribe({
      next: (data) => {
        this.videos = data;
        console.log('Videos loaded:', this.videos);
      },
      error: (err) => {
        console.error('Error loading videos:', err);
      }
    });
  }

  navigateToVideo(video: any): void {
    this.router.navigate(['/visualizer'], {
      queryParams: { id: video.id }
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}

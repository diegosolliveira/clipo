import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  videoDetails: any = {};
  safeUrl!: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const videoId = params['id'];
      this.loadVideoDetails(videoId);
    });
  }

  loadVideoDetails(id: string): void {
    this.http.get<any[]>(`http://localhost:3000/videos`).subscribe({
      next: (data) => {
        this.videoDetails = data.find(video => video.id === Number(id));
        if (this.videoDetails) {
          const videoEmbedUrl = this.convertToEmbedUrl(this.videoDetails.url);
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoEmbedUrl);
        } else {
          console.error('Vídeo não encontrado');
        }
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do vídeo:', err);
      }
    });
  }

  convertToEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
}

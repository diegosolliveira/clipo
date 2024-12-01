import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import necessário
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { SalvoComponent } from './app/salvo/salvo.component';
import { LaterComponent } from './app/later/later.component';
import { VisualizerComponent } from './app/visualizer/visualizer.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'salvo', component: SalvoComponent },
      { path: 'later', component: LaterComponent },
      { path: 'visualizer', component: VisualizerComponent },
    ]),
    provideHttpClient(),
  ],
});

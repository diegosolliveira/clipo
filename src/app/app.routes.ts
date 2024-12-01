import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SalvoComponent } from './salvo/salvo.component';
import { LaterComponent } from './later/later.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'salvo', component: SalvoComponent },
  { path: 'later', component: LaterComponent },
  { path: 'visualizer', component: VisualizerComponent },
];

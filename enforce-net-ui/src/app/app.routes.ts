import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Layout } from './core/layout/layout';
import { Dashboard } from './features/dashboard/dashboard'; 
import { PendingTickets } from './features/pending-tickets/pending-tickets';

export const routes: Routes = [
  { path: 'login', component: Login },
  
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard }, 
    { path: 'pending-tickets', component: PendingTickets },

      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
  },
  
  { path: '**', redirectTo: 'login' },
];
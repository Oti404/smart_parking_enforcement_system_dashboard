import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PendingTicket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private http = inject(HttpClient);

  /**
   * Fetch tickets from local JSON container.
   * TODO: Update to FastAPI production URL.
   */
  getTickets(): Observable<PendingTicket[]> {
    return this.http.get<PendingTicket[]>('assets/data/tickets.json');
  }

  /**
   * Fetch system analytics and trends.
   */
  getStats(): Observable<any> {
    return this.http.get<any>('assets/data/stats.json');
  }
}
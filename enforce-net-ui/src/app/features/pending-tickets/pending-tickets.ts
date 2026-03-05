import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../core/services/data';
import { PendingTicket } from '../../core/models/ticket.model';

@Component({
  selector: 'app-pending-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-tickets.html',
  styleUrl: './pending-tickets.scss'
})
export class PendingTickets implements OnInit {
  private dataService = inject(Data);
  
  tickets: PendingTicket[] = [];
  selectedTicket: PendingTicket | null = null;

  ngOnInit(): void {
    this.fetchTickets();
  }

  /**
   * Fetches tickets using the Data service container.
   */
  fetchTickets(): void {
    this.dataService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
        if (this.tickets.length > 0) {
          this.selectedTicket = this.tickets[0];
        }
      },
      error: (err) => console.error('Data access error:', err)
    });
  }

  selectTicket(ticket: PendingTicket): void {
    this.selectedTicket = ticket;
  }

  confirmTicket(id: string): void {
    this.tickets = this.tickets.filter(t => t.id !== id);
    this.selectedTicket = this.tickets.length > 0 ? this.tickets[0] : null;
    // TODO: Implement API call via Data service to persist confirmation
  }

  rejectTicket(id: string): void {
    this.tickets = this.tickets.filter(t => t.id !== id);
    this.selectedTicket = this.tickets.length > 0 ? this.tickets[0] : null;
    // TODO: Implement API call via Data service to persist rejection
  }
}
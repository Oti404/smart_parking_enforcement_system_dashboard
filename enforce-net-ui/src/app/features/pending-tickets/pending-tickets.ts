import { Component, OnInit, inject, signal } from '@angular/core'; // Adaugă signal
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
  
  // Transformăm variabilele simple în Signals
  tickets = signal<PendingTicket[]>([]);
  selectedTicket = signal<PendingTicket | null>(null);

  ngOnInit(): void {
    this.fetchTickets();
  }

  fetchTickets(): void {
    this.dataService.getTickets().subscribe({
      next: (data) => {
        this.tickets.set(data); // Setăm valoarea signal-ului
        if (data.length > 0) {
          this.selectedTicket.set(data[0]);
        }
      },
      error: (err) => console.error('Data access error:', err)
    });
  }

  selectTicket(ticket: PendingTicket): void {
    this.selectedTicket.set(ticket);
  }

  confirmTicket(id: string): void {
    const updatedTickets = this.tickets().filter(t => t.id !== id);
    this.tickets.set(updatedTickets);
    this.selectedTicket.set(updatedTickets.length > 0 ? updatedTickets[0] : null);
  }

  rejectTicket(id: string): void {
    const updatedTickets = this.tickets().filter(t => t.id !== id);
    this.tickets.set(updatedTickets);
    this.selectedTicket.set(updatedTickets.length > 0 ? updatedTickets[0] : null);
  }
}
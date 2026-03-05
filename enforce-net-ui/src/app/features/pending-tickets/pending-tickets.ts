import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingTicket } from '../../core/models/ticket.model';

@Component({
  selector: 'app-pending-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-tickets.html'
})
export class PendingTickets implements OnInit {
  tickets: PendingTicket[] = [];
  selectedTicket: PendingTicket | null = null;

  ngOnInit(): void {
    this.loadMockData();
  }

  /**
   * TODO: Replace with actual HTTP call to FastAPI endpoint (e.g., GET /api/v1/tickets/pending)
   */
  private loadMockData(): void {
    this.tickets = [
      {
        id: 'SCAN-001',
        licensePlate: 'XYZ-9876',
        confidence: 98.5,
        timestamp: '2023-10-24T10:45:22Z',
        location: { address: '456 Oak Avenue', lat: 34.0522, lng: -118.2437 },
        images: { fullFrameUrl: 'assets/mock-car1.png' },
        violationType: 'No Parking Zone',
        priority: 'HIGH'
      },
      {
        id: 'SCAN-002',
        licensePlate: 'ABC-1234',
        confidence: 85.2,
        timestamp: '2023-10-24T10:43:00Z',
        location: { address: '123 Main St', lat: 34.0525, lng: -118.2440 },
        images: { fullFrameUrl: 'assets/mock-car2.png' },
        violationType: 'Expired Permit',
        priority: 'NORMAL'
      }
    ];
    this.selectedTicket = this.tickets[0];
  }

  selectTicket(ticket: PendingTicket): void {
    this.selectedTicket = ticket;
  }

  /**
   * TODO: Implement POST/PATCH request to approve ticket
   */
  confirmTicket(id: string): void {
    this.tickets = this.tickets.filter(t => t.id !== id);
    this.selectedTicket = this.tickets.length > 0 ? this.tickets[0] : null;
  }

  /**
   * TODO: Implement POST/PATCH request to reject ticket
   */
  rejectTicket(id: string): void {
    this.tickets = this.tickets.filter(t => t.id !== id);
    this.selectedTicket = this.tickets.length > 0 ? this.tickets[0] : null;
  }
}
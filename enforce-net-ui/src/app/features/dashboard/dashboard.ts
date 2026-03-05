import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../core/services/data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  private dataService = inject(Data);
  stats: any = null;

  ngOnInit(): void {
    this.dataService.getStats().subscribe({
      next: (res) => this.stats = res,
      error: (err) => console.error('Failed to load dashboard stats', err)
    });
  }
}
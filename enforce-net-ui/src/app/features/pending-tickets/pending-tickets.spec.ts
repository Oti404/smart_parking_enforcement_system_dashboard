import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTickets } from './pending-tickets';

describe('PendingTickets', () => {
  let component: PendingTickets;
  let fixture: ComponentFixture<PendingTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

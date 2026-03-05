export interface LocationData {
  address: string;
  lat: number;
  lng: number;
}

export interface TicketImageData {
  fullFrameUrl: string;
  plateCropUrl?: string;
}

export interface PendingTicket {
  id: string;
  licensePlate: string;
  confidence: number;
  timestamp: string;
  location: LocationData;
  images: TicketImageData;
  violationType: string;
  priority: 'HIGH' | 'NORMAL';
}
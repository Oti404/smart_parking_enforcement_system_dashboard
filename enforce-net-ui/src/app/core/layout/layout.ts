import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  
  constructor(private router: Router) {}

  /**
   * Clears the user session and redirects to the authentication portal.
   * TODO: Implement JWT token removal from localStorage/cookie once AuthGuard is set up.
   */
  onLogout(): void {
    this.router.navigate(['/login']);
  }
}
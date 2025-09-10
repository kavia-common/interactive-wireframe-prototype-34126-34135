import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Sidebar navigation derived from Figma.
 * Provides router links for Dashboard, Devices, Analytics, Users, Settings.
 * Supports collapsed state via parent container CSS class.
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() navigated = new EventEmitter<void>();

  constructor(private router: Router) {}

  // PUBLIC_INTERFACE
  onNavigate(): void {
    /** Emits when a nav item is clicked to allow parent to respond (optional). */
    this.navigated.emit();
  }
}

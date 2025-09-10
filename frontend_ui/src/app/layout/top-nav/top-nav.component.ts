import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Top navigation component derived from Figma extraction.
 * Renders brand, search bar, action buttons, and a user dropdown.
 * Emits sidebarToggle for parent container to collapse/expand sidebar.
 */
@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  // PUBLIC_INTERFACE
  @Output() sidebarToggle = new EventEmitter<void>();
  /** Emits when user clicks the hamburger button to toggle sidebar. */

  dropdownOpen = false;

  // PUBLIC_INTERFACE
  toggleSidebar(): void {
    /** Toggle the sidebar open/collapsed state (emits to parent). */
    this.sidebarToggle.emit();
  }

  toggleDropdown(event: any): void {
    /** Toggle account dropdown menu open/close. */
    if (event && typeof event.stopPropagation === 'function') {
      event.stopPropagation();
    }
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown(): void {
    /** Closes the dropdown. */
    this.dropdownOpen = false;
  }

  onDropdownAction(action: 'settings' | 'logout'): void {
    /** Handles dropdown actions for prototype (logs as placeholder). */
    // Use console instead of alert to avoid eslint no-undef in non-browser test env.
    if (action === 'settings') {
      console.log('Navigate to Settings');
    } else if (action === 'logout') {
      console.log('Logging out...');
    }
    this.dropdownOpen = false;
  }
}

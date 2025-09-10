import { Component } from '@angular/core';

/**
 * Dashboard page showing "Recent Activity" card with controls and table.
 * Adapted from Figma extracted representative screen.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  modalOpen = false;

  // PUBLIC_INTERFACE
  openModal(): void {
    /** Opens the create modal. */
    this.modalOpen = true;
  }

  // PUBLIC_INTERFACE
  closeModal(): void {
    /** Closes the create modal. */
    this.modalOpen = false;
  }

  // PUBLIC_INTERFACE
  toggleAll(event: any, tbody: any): void {
    /** Header checkbox toggles all row checkboxes. */
    const target = event?.target as any;
    if (!tbody || !target) return;
    const boxes = Array.from((tbody as any).querySelectorAll('input[type="checkbox"]')) as any[];
    boxes.forEach((cb: any) => (cb.checked = !!target.checked));
  }
}

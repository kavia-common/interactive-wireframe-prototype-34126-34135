import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

/**
 * Application shell component: hosts top nav, sidebar, and routed content.
 * Applies 'layout' grid and toggles 'collapsed' class based on sidebar state.
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, SidebarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {
  collapsed = false;

  // PUBLIC_INTERFACE
  toggleSidebar(): void {
    /** Toggle the collapsed state of the layout. */
    this.collapsed = !this.collapsed;
  }
}

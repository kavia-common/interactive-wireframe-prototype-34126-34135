import { Component } from '@angular/core';
import { ShellComponent } from './layout/shell/shell.component';

/**
 * Root application component. Hosts the application shell.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  template: `<app-shell></app-shell>`,
})
export class AppComponent {}

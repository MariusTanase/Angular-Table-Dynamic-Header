import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink, RouterLinkActive],
  styles: [
    `
      html,
      body {
        font-family: Arial, sans-serif;
        margin: 0 auto;
        padding: 0;
      }

      nav {
        display: flex;
        justify-content: center;
        padding: 1rem;
      }
      a {
        margin: 0 1rem;
      }
      table {
        max-width: 1280px;
        margin: 0 auto;
      }
    `,
  ],
  templateUrl: `app.component.html`,
})
export class AppComponent {}

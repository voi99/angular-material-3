import { Component } from "@angular/core";
import { MatNavList, MatListItem } from "@angular/material/list";
import { SIDEBAR_LINKS } from "./sidebar-options";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-sidebar",
  template: `
    <mat-nav-list>
      @for (sidebarLink of sidebarLinks; track $index) {
        <a mat-list-item [routerLink]="sidebarLink.href" class="sidebar-link" routerLinkActive="tonal">
          {{ sidebarLink.name }}
        </a>
      }
    </mat-nav-list>
  `,
  standalone: true,
  styles: `
    .sidebar-link {
      margin-bottom: 0.35rem;
    }
  `,
  imports: [MatNavList, MatListItem, RouterLink, RouterLinkActive],
})
export class SidebarComponent {
  sidebarLinks = SIDEBAR_LINKS;
}

import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-common-buttons",
  standalone: true,
  imports: [SectionComponent, MatButton, MatIcon],
  template: `
    <app-section title="Common Buttons">
      <div class="wrapper">
        <div class="flex-wrapper">
          <button mat-button>Normal</button>
          <button mat-raised-button>Raised</button>
          <button mat-flat-button>Flat</button>
          <button mat-stroked-button>Stroked</button>
          <button mat-raised-button class="tonal">Tonal</button>
        </div>
        <div class="flex-wrapper">
          <button mat-raised-button class="tonal">
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-stroked-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-flat-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-raised-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
        </div>
      </div>
    </app-section>
  `,
  styles: `
    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  `,
})
export class CommonButtonsComponent {}

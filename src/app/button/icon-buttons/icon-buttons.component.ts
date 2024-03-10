import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: "app-icon-buttons",
  standalone: true,
  imports: [SectionComponent, MatIcon, MatIconButton],
  template: `
    <app-section title="Icon Buttons">
      <div class="flex-wrapper">
        <button mat-icon-button>
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon class="primary-icon">light_mode</mat-icon>
        </button>
        <button mat-icon-button class="secondary-icon">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="warn-icon">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="tonal">
          <mat-icon>dark_mode</mat-icon>
        </button>
      </div>
    </app-section>
  `,
})
export class IconButtonsComponent {}

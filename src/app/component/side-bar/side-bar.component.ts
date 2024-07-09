import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CustomSidenavComponent } from "../custom-sidenav/custom-sidenav.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() isDialogOpen = false;

  isSidebarClosed = true; // Sidebar is closed initially
  isSidebarHidden = true; // Sidebar is hidden initially

  toggleSidebar() {
    if (this.isSidebarHidden) {
      this.isSidebarHidden = false;
      setTimeout(() => {
        this.isSidebarClosed = false;
      }, 10); 
    } else {
      this.isSidebarClosed = true;
      setTimeout(() => {
        this.isSidebarHidden = true;
      }, 100);
    }
  }
}

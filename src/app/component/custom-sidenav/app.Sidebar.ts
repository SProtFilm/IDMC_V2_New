import { Component, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CustomSidenavComponent } from "./custom-sidenav.component";


@Component({
    selector: "app-side-bar",
    standalone: true,
    imports: [CommonModule, RouterModule , MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent],
    template: `
    <div [ngClass]="{'w-72': !isSidebarClosed, 'w-24': isSidebarClosed}" class="absolute z-50 top-0 left-0 bg-custom-gradient h-full transition-width duration-300">
        <header>
        <div class=" flex gap-4 item-center pt-6 pl-8" (click)="toggleSidebar()">
                <img src="assets/menu.png" class="w-8"/>
                <span class="text-xs text-white" *ngIf="!isSidebarClosed"> IDMC </span>
        </div>
        </header>
        <main>
        <app-custom-sidenav [isSidebarClosed]="isSidebarClosed"/>
        </main>
        <footer class="absolute bottom-0 pb-5 w-full transition-opacity" [ngClass]="{'opacity-0': isSidebarClosed, 'opacity-100': !isSidebarClosed}">
            <div class="pl-10"> 
                <h1 class="pt-2 text-gray-400 text-xs">ชื่อผู้ใช้:</h1>
                <h1 class="text-gray-400 text-xs">CBLXXXXXX</h1>
                <h1 class="pt-2 text-gray-400 text-xs">แผนก:</h1>
                <h1 class="text-gray-400 text-xs">XXXXXXXXXXXX</h1>
                <h1 class="pt-2 text-gray-400 text-xs">สถานที่:</h1>
                <h1 class="text-gray-400 text-xs">XXXXXXXXXXXX</h1>
                <h1 class="pt-2 text-gray-400 text-xs">วันที่/เวลา:</h1>
                <h1 class="text-gray-400 text-xs">01/01/1111_XX:XX</h1>
            </div>
        </footer>
    </div>
    `,
    styleUrl: "./custom-sidenav.component.css",
})

export class Sidebar {

    isSidebarClosed = true;

    toggleSidebar() {
        this.isSidebarClosed = !this.isSidebarClosed;
    }
}
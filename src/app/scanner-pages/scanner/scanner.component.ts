import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CustomSidenavComponent } from '../../component/custom-sidenav/custom-sidenav.component';
import { SideBarComponent } from '../../component/side-bar/side-bar.component';
import { HeadScannerComponent } from '../head-scanner/head-scanner.component';
import { DocumentListComponent } from '../document-list/document-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScannerSystemComponent } from '../scanner-system/scanner-system.component';
import { DisplayScannerComponent } from '../display-scanner/display-scanner.component';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    CustomSidenavComponent,
    SideBarComponent,
    HeadScannerComponent,
    DocumentListComponent,
    ScannerSystemComponent,
    DisplayScannerComponent
  ],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css'
})
export class ScannerComponent {

  collapsed = signal(false)

  sidenavWidth = computed(() => this.collapsed() ? '64px' : '200px');
  
}

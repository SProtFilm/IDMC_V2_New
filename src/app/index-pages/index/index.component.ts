import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomSidenavComponent } from '../../component/custom-sidenav/custom-sidenav.component';
import { SideBarComponent } from '../../component/side-bar/side-bar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HeadIndexComponent } from '../head-index/head-index.component';
import { DoucumentListIndexComponent } from '../doucument-list-index/doucument-list-index.component';
import { ScanIndexSystemComponent } from '../scan-index-system/scan-index-system.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    CustomSidenavComponent,
    SideBarComponent,
    HeadIndexComponent,
    DoucumentListIndexComponent,
    ScanIndexSystemComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  
  collapsed = signal(false)

  sidenavWidth = computed(() => this.collapsed() ? '64px' : '200px');
}

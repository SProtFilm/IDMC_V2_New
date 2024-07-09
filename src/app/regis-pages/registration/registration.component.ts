import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeadRegisComponent } from '../head-regis/head-regis.component';
import { InfoBatchComponent } from '../info-batch/info-batch.component';
import { CustomSidenavComponent } from '../../component/custom-sidenav/custom-sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InfoCaseComponent } from '../info-case/info-case.component';
import { TableCaseComponent } from '../table-case/table-case.component';
import { CreateByCaseComponent } from '../create-by-case/create-by-case.component';
import { CreateByTypeComponent } from '../create-by-type/create-by-type.component';
import { SideBarComponent } from '../../component/side-bar/side-bar.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    HeadRegisComponent,
    InfoBatchComponent,
    CustomSidenavComponent,
    MatSidenavModule,
    InfoCaseComponent,
    TableCaseComponent,
    CreateByCaseComponent,
    CreateByTypeComponent,
    SideBarComponent
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  collapsed = signal(false)

  sidenavWidth = computed(() => this.collapsed() ? '64px' : '200px');

  
}

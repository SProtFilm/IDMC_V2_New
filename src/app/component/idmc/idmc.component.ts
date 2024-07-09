import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { SideBarComponent } from '../side-bar/side-bar.component';


@Component({
  selector: 'app-idmc',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule, 
    CustomSidenavComponent,
    SideBarComponent
    ],
  templateUrl: './idmc.component.html',
  styleUrl: './idmc.component.css'
})
export class IdmcComponent {

  // collapsed = signal(false)

  // sidenavWidth = computed(() => this.collapsed() ? '64px' : '200px');

  

}

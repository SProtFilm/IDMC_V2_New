import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, 
    MatListModule, 
    MatIconModule, 
    RouterLink, 
    RouterLinkActive],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})


export class CustomSidenavComponent {
  @Input() isSidebarClosed = false;

  menuItem = signal<MenuItem[]>([
    {
      icon: './assets/sidebar/registration.png',
      label: 'ลงทะเบียน',
      route: '/registration'
    },
    {
      icon: './assets/sidebar/scan.png',
      label: 'แสกน',
      route: '/scanner'
    },
    {
      route: '/index',
      icon: 'assets/sidebar/index.png',
      label: 'Index'
    },
    {
        route: '/qc',
        icon: 'assets/sidebar/qc.png',
        label: 'QC'
    },
    {
        route: '/dispatch',
        icon: 'assets/sidebar/dispatch.png',
        label: 'Dispatch'
    },
    {
        route: '/maker',
        icon: 'assets/sidebar/maker.png',
        label: 'Maker'
    },
    {
        route: '/checker',
        icon: 'assets/sidebar/checker.png',
        label: 'Checker'
    },
  ])
}

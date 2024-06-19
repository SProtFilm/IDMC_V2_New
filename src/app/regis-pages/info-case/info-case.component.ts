import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-info-case',
  standalone: true,
  templateUrl: './info-case.component.html',
  styleUrls: ['./info-case.component.css'],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
  ]
})
export class InfoCaseComponent {

}

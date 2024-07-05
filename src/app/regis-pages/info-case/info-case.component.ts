import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerDTO } from '../../models/customerModel';
import { ProcedureService } from '../../service/procedure.service';

@Component({
  selector: 'app-info-case',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './info-case.component.html',
  styleUrl: './info-case.component.css',
})
export class InfoCaseComponent implements OnInit {
  customers: CustomerDTO[] = [];
  customer: CustomerDTO | null = null;
  caNum: string = '';
  alNum: string = '';
  interLGNum: string = '';
  teleENum: string = '';
  acNum: string = '';
  localNum: string = '';
  lang: number = 1;
  valueCustomerId: string = '';

  constructor(private procedureService: ProcedureService) {}

  ngOnInit(): void {}

  checkTextFields(): void {
    if (this.caNum) {
      this.searchBycaNo();
    } else if (this.alNum) {
      this.searchByalNo();
    } else if (this.interLGNum) {
      this.searchByinterLGNo();
    } else if (this.teleENum) {
      this.searchByteleENo();
    } else if (this.acNum) {
      this.searchByacNo();
    } else if (this.localNum) {
      this.searchBylocalRefNo();
    } else {
      //sai ar rai dee norrr
    }
  }

  searchBycaNo(): void {
    this.procedureService
      .searchBycaNo(this.caNum, this.lang)
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);

        if (this.customers.length > 0) {
          this.customer = this.customers[0];
        }
      });
  }
  searchByalNo(): void {
    this.procedureService
      .searchByalNo(this.alNum, this.lang)
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);

        if (this.customers.length > 0) {
          this.customer = this.customers[0];
        }
      });
  }
  searchByinterLGNo(): void {
    this.procedureService
      .searchByinterLGNo(this.interLGNum, this.lang)
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);

        if (this.customers.length > 0) {
          this.customer = this.customers[0];
        }
      });
  }
  searchByteleENo(): void {
    this.procedureService
      .searchByteleENo(this.teleENum, this.lang)
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);

        if (this.customers.length > 0) {
          this.customer = this.customers[0];
        }
      });
  }
  searchBylocalRefNo(): void {
    this.procedureService
      .searchBylocalRefNo(this.localNum, this.lang)
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);

        if (this.customers.length > 0) {
          this.customer = this.customers[0];
        }
      });
  }
  searchByacNo(): void {
    this.procedureService
      .searchByacNo(this.acNum, this.lang)
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);

        if (this.customers.length > 0) {
          this.customer = this.customers[0];
        }
      });
  }

  resetInputData() {
    this.caNum = '';
    this.acNum = '';
    this.alNum = '';
    this.localNum = '';
    this.interLGNum = '';
    this.teleENum = '';
    this.customer = null;
  }
}

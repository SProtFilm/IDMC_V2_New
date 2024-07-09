import { Component} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { AddDocumentsComponent } from '../add-documents/add-documents.component';
import { MatDialog } from '@angular/material/dialog';
import { ProcedureService } from '../../service/procedure.service';
import { ShareTableDataService } from '../../service/share-table-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mDocument } from '../../models/mDocument';
import { productType } from '../../models/productType';
import { TransactionList } from '../../models/mDocTransactionList';
import { CreateByTypeGComponent } from '../create-by-type-g/create-by-type-g.component';

@Component({
  selector: 'app-create-by-case',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-by-case.component.html',
  styleUrl: './create-by-case.component.css'
})
export class CreateByCaseComponent {

  constructor(public dialog: MatDialog,
    private procedureService: ProcedureService,
    private shareTableDataService: ShareTableDataService,
  ) {}

  items: mDocument [] = [];
  selectedDocumentGroup: number = 0;
  pLangFlag = 1;
  mDocCustType: any[] = [];
  productType : any[] = [];
  TransactionList: any[] = [];
  selectedProductNum: number = 0;
  selectedTransactionnum: number = 0;
  dcode = '7180';


  ngOnInit() {
    this.procedureService.mdocCustType(this.pLangFlag).subscribe(data => {
      this.mDocCustType = data;
    }),

    this.procedureService.mDocProductList().subscribe(data => {
      this.productType = data;
    }),

    this.procedureService.mDocTransactionList().subscribe(data => {
      this.TransactionList = data;
    });
  }

  onDocSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDocumentGroup = parseInt (selectElement.value);
    this.getItemBySelectChange(this.selectedDocumentGroup);
  }

  onDocSelectChangeProduct(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedProductNum = parseInt (selectElement.value);
    this.getItemBySelectChangeThreeParameter();
  }

  onDocSelectChangeTransaction(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTransactionnum = parseInt (selectElement.value);
    this.getItemBySelectChangeThreeParameter();
  }

  getItemBySelectChangeThreeParameter(){
    const pcode = this.selectedProductNum;
    const tcode = this.selectedTransactionnum;
    const dcode = this.dcode;
    this.procedureService.mdocByCode(pcode,tcode,dcode).subscribe(items => {
      this.items = items;
      console.log('Items for selected group:', this.items);
    });
  }



  getItemBySelectChange(custTypeNum : number ){
    this.procedureService.mdocByCustType(custTypeNum).subscribe(items => {
      this.items = items;
      console.log('Items for selected group:', this.items);
    });
  }

  addItemtoMainTable(): void {
      const itemsToAdd = this.items.map(item => {
        return {
          ...item,
          mdoc_STORETYPE: item.mdoc_STORETYPE
        };
      });
      this.shareTableDataService.addSelectedItems(itemsToAdd);
    }

    openAddDocDialog() {
      const dialogRef = this.dialog.open(AddDocumentsComponent, {
        width: '75%',
        height: 'auto%',
        autoFocus: false,
        disableClose: true // Optional: Set to true if you want to prevent closing the dialog by clicking outside or pressing Escape key
      });

  }

  openCreateByG() {
    const dialogRef = this.dialog.open(CreateByTypeGComponent, {
      width: '75%',
      height: 'auto%',
      autoFocus: false,
      disableClose: true, // Optional: Set to true if you want to prevent closing the dialog by clicking outside or pressing Escape key
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // You can perform any necessary actions after the dialog is closed here
    });
  }

 
}

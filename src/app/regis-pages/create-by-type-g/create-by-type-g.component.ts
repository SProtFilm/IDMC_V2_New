import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ShareTableDataService } from '../../service/share-table-data.service';
import { ProcedureService } from '../../service/procedure.service';
import { mDocument } from '../../models/mDocument';

@Component({
  selector: 'app-create-by-type-g',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-by-type-g.component.html',
  styleUrl: './create-by-type-g.component.css'
})
export class CreateByTypeGComponent implements OnInit{
  
  constructor(public dialogRef: MatDialogRef<CreateByTypeGComponent>,
  private shareTableDataService: ShareTableDataService,
  private procedureService: ProcedureService
  ) {}

  items: mDocument[] = [];
  
  shareItems: any[] = [];

  selectedItems: mDocument[] = [];

  mDocGroupList: any[] = [];
  pLangFlag = 1

  selectedDocumentGroup: number = 0;

  ngOnInit() {
    this.procedureService.mdocGroupList(this.pLangFlag).subscribe(data => {
      this.mDocGroupList = data;
      console.log(data);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  addItem(): void {
    this.items.forEach(item => {
      if (item.selected) {
        this.selectedItems.push({ ...item, selected: true });
        item.selected = false;
      }
    });
    this.items = this.items.filter(item => !this.selectedItems.includes(item));
  }

  removeItem(): void {
    this.selectedItems = this.selectedItems.filter(item => !item.selected);
  }

  addItemtoMainTable(): void {
    const selectedItems = this.selectedItems.filter(item => item.selected);
    if (selectedItems.length > 0) {
      const itemsToAdd = selectedItems.map(item => {
        return {
          ...item,
          mdoc_STORETYPE: item.mdoc_STORETYPE
        };
      });
      this.shareTableDataService.addSelectedItems(itemsToAdd);
    }
    this.dialogRef.close();
  }

  onDocSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDocumentGroup = parseInt (selectElement.value);
    console.log('Selected Document Group:', this.selectedDocumentGroup);
    this.getItemBySelectChange(this.selectedDocumentGroup);
  }

  getItemBySelectChange(glistnum : number ){
    this.procedureService.mdocByGroupList(glistnum).subscribe(items => {
      this.items = items;
      console.log('Items for selected group:', this.items);
    });
  }

}
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateByTypeGComponent } from '../create-by-type-g/create-by-type-g.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareTableDataService } from '../../service/share-table-data.service';
import { ProcedureService } from '../../service/procedure.service';
import { mDocument } from '../../models/mDocument';

@Component({
  selector: 'app-add-documents',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.css'
})
export class AddDocumentsComponent {

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
        const itemsToAdd: any [] = [];
        selectedItems.forEach(item => {
          const quantity = item.quantity && item.quantity > 0 ? item.quantity : 1;
          for (let i = 0; i < quantity; i++) {
            itemsToAdd.push({ ...item });
          }
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

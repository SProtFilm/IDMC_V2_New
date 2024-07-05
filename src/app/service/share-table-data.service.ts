import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareTableDataService {

  private shareItems: any[] = [];
  

  constructor() { }

  addSelectedItems(items: any[]): void {
    this.shareItems.push(...items);
  }

  removeSelectedItems(): void {
    this.shareItems = this.shareItems.filter(item => !item.selected);
  }

  getSelectedItems(): any[] {
    return this.shareItems;
  }
}

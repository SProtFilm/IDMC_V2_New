import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DialogComponent } from '../dialog/dialog.component';
import { ViewdivisionComponent } from '../viewdivision/viewdivision.component';
import { SideBarComponent } from '../../component/side-bar/side-bar.component';
interface TreeNode {
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
  expanded?: boolean;
  checked?: boolean;
}

@Component({
  selector: 'app-checker',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatCheckboxModule,
    MatRadioModule, MatGridListModule, MatIconModule, MatDividerModule, MatButtonModule, MatDialogModule,
    CommonModule, ReactiveFormsModule, MatToolbarModule, MatSidenavModule, RouterLink,SideBarComponent,
    RouterLinkActive],
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit, AfterViewInit {
  constructor(private dialog: MatDialog) {}
  selectedFunctionType: string = '';
  selectedDocumentDetail: string = '';
  treeData: TreeNode[] = [
    {
      name: 'BBL',
      type: 'folder',
      expanded: true,
      checked: false,
      children: [
        {
          name: 'ABBBBYYMMDDNNNN',
          type: 'folder',
          checked: false,
          expanded: true,
          children: [
            {
              name: 'Case 1',
              type: 'folder',
              checked: false,
              expanded: true,
              children: [
                { name: 'บัตร', type: 'folder', checked: false,
                expanded: true,
                children: [
                  {name: 'Page1', type: 'file', checked: false},
                  {name: 'Page2', type: 'file', checked: false},
                  {name: 'Page3', type: 'file', checked: false}
                ]
                 },

              ]
              
            },
            {
              name: 'Case 2',
              type: 'folder',
              checked: false,
              expanded: true,
              children: [
                { name: 'สินเชื่อ', type: 'folder', checked: false,
                expanded: true,
                children: [
                  {name: 'Page1', type: 'file', checked: false},
                  {name: 'Page2', type: 'file', checked: false},
                  {name: 'Page3', type: 'file', checked: false}
                ]
                 },

              ]
              
            }
            
          ]
        }
      ]
    }
  ];

  @ViewChildren('checkboxes') checkboxRefs!: QueryList<ElementRef>;

  ngOnInit() {
    // We shouldn't update parent checkbox status here since ViewChildren are not initialized yet
  }

  ngAfterViewInit() {
    // Now checkboxRefs should be available
    this.updateParentCheckboxStatus(this.treeData);
  }

  toggleNode(node: TreeNode) {
    if (node.type === 'folder') {
      node.expanded = !node.expanded;
    }
  }

  onCheckboxChange(node: TreeNode) {
    this.checkAllChildren(node, node.checked!);
    this.updateParentCheckboxStatus(this.treeData);
  }

  checkAllChildren(node: TreeNode, checked: boolean) {
    node.children?.forEach(child => {
      child.checked = checked;
      if (child.type === 'folder') {
        this.checkAllChildren(child, checked);
      }
    });
  }

  updateParentCheckboxStatus(nodes: TreeNode[]) {
    nodes.forEach(node => {
      if (node.type === 'folder') {
        if (node.children && node.children.length) {
          node.children.forEach(child => {
            this.updateParentCheckboxStatus([child]);
          });
          const allChildrenChecked = node.children.every(child => child.checked);
          const someChildrenChecked = node.children.some(child => child.checked);
          node.checked = allChildrenChecked;
          const checkbox = this.checkboxRefs.find(ref => ref.nativeElement.getAttribute('ng-reflect-model') === node.name);
          if (checkbox) {
            checkbox.nativeElement.indeterminate = !allChildrenChecked && someChildrenChecked;
          } else {
            console.warn(`Checkbox element not found for node: ${node.name}`);
          }
        }
      }
    });
  }
  openDialog(): void {
    this.dialog.open(DialogComponent, { width: '500px' });
  }
  openviewdivision(): void {
    this.dialog.open(ViewdivisionComponent, { width: '80%' ,height:'650px' });
  }
}

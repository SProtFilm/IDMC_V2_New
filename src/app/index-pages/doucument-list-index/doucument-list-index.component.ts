import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

interface TreeNode {
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
  expanded?: boolean;
  checked?: boolean;
}

@Component({
  selector: 'app-doucument-list-index',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
  templateUrl: './doucument-list-index.component.html',
  styleUrl: './doucument-list-index.component.css'
})
export class DoucumentListIndexComponent implements OnInit, AfterViewInit {
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
                {
                  name: 'บัตร',
                  type: 'folder',
                  checked: false,
                  expanded: true,
                  children: [
                    { name: 'Page1', type: 'file', checked: false },
                    { name: 'Page2', type: 'file', checked: false },
                    { name: 'Page3', type: 'file', checked: false },
                  ],
                },
              ],
            },
            {
              name: 'Case 2',
              type: 'folder',
              checked: false,
              expanded: true,
              children: [
                {
                  name: 'สินเชื่อ',
                  type: 'folder',
                  checked: false,
                  expanded: true,
                  children: [
                    { name: 'Page1', type: 'file', checked: false },
                    { name: 'Page2', type: 'file', checked: false },
                    { name: 'Page3', type: 'file', checked: false },
                  ],
                },
              ],
            },
            {
              name: 'Case 3',
              type: 'folder',
              checked: false,
              expanded: true,
              children: [
                {
                  name: 'สินเชื่อ',
                  type: 'folder',
                  checked: false,
                  expanded: true,
                  children: [
                    { name: 'Page1', type: 'file', checked: false },
                    { name: 'Page2', type: 'file', checked: false },
                    { name: 'Page3', type: 'file', checked: false },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'AAL',
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
                    {
                      name: 'บัตร',
                      type: 'folder',
                      checked: false,
                      expanded: true,
                      children: [
                        { name: 'Page1', type: 'file', checked: false },
                        { name: 'Page2', type: 'file', checked: false },
                        { name: 'Page3', type: 'file', checked: false },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
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
    node.children?.forEach((child) => {
      child.checked = checked;
      if (child.type === 'folder') {
        this.checkAllChildren(child, checked);
      }
    });
  }

  updateParentCheckboxStatus(nodes: TreeNode[]) {
    nodes.forEach((node) => {
      if (node.type === 'folder') {
        if (node.children && node.children.length) {
          node.children.forEach((child) => {
            this.updateParentCheckboxStatus([child]);
          });
          const allChildrenChecked = node.children.every(
            (child) => child.checked
          );
          const someChildrenChecked = node.children.some(
            (child) => child.checked
          );
          node.checked = allChildrenChecked;
          const checkbox = this.checkboxRefs.find(
            (ref: {
              nativeElement: { getAttribute: (arg0: string) => string };
            }) =>
              ref.nativeElement.getAttribute('ng-reflect-model') === node.name
          );
          if (checkbox) {
            checkbox.nativeElement.indeterminate =
              !allChildrenChecked && someChildrenChecked;
          } else {
            console.warn(`Checkbox element not found for node: ${node.name}`);
          }
        }
      }
    });
  }

  // openDialog(): void {
  //   this.dialog.open(DialogComponent, { width: '500px' });
  // }
  // openviewdivision(): void {
  //   this.dialog.open(ViewdivisionComponent, { width: '80%' ,height:'650px' });
  // }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-scanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-scanner.component.html',
  styleUrls: ['./display-scanner.component.css']
})
export class DisplayScannerComponent implements OnInit, OnDestroy {
  @Input() imageSource!: string;
  @Input() fitWindow!: string;

  private fitWindowSubscription!: Subscription;
  private imageSourceSubscription!: Subscription;
  private rotationStateSubscription!: Subscription;
  
  private zoomLevel: number = 100; // Initial zoom level (percentage)

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fitWindowSubscription = this.dataService.fitclass$.subscribe(fitclass => {
      this.fitWindow = fitclass;
    });

    this.imageSourceSubscription = this.dataService.imgSource$.subscribe(newImg => {
      this.imageSource = newImg;
      this.applyRotation();
    });

    this.rotationStateSubscription = this.dataService.rotationStates$.subscribe(() => {
      this.applyRotation();
    });
  }

  ngOnDestroy() {
    this.fitWindowSubscription.unsubscribe();
    this.imageSourceSubscription.unsubscribe();
    this.rotationStateSubscription.unsubscribe();
  }

  // Method to resize the image based on the current zoom level
  private resizeImage(): void {
    const imageElement = document.getElementById('displayedImage') as HTMLImageElement;
    if (imageElement) {
      const originalWidth = imageElement.naturalWidth;
      const originalHeight = imageElement.naturalHeight;
      
      const newWidth = (originalWidth * this.zoomLevel) / 100;
      const newHeight = (originalHeight * this.zoomLevel) / 100;

      imageElement.style.width = `${newWidth}px`;
      imageElement.style.height = `${newHeight}px`;
    }
  }

  private applyRotation(): void {
    const imageElement = document.getElementById('displayedImage') as HTMLImageElement;
    if (imageElement && this.imageSource) {
      const rotation = this.dataService.getRotationState(this.imageSource);
      imageElement.style.transform = `rotate(${rotation}deg)`;
    }
  }
}

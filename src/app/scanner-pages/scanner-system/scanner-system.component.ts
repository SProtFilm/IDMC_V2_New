import { Component, Input, OnInit } from '@angular/core';
import { DisplayScannerComponent } from '../display-scanner/display-scanner.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-scanner-system',
  standalone: true,
  imports: [DisplayScannerComponent],
  templateUrl: './scanner-system.component.html',
  styleUrls: ['./scanner-system.component.css'],
})
export class ScannerSystemComponent implements OnInit {
  imageSource: string = '';
  fitWindow: string = 'fit-100'; // Default fitWindow class for 100% size
  currentPageIndex: number = 0; // Initialize current page index

  private zoomLevel: number = 100; // Initial zoom level (percentage)
  private minZoomLevel: number = 25; // Minimum zoom level (percentage)
  private maxZoomLevel: number = 200; // Maximum zoom level (percentage)
  private brightnessLevel: number = 100; // Initial brightness level
  private isBlackWhite: boolean = false; // Flag to track black/white mode
  private isMagnifyingGlassEnabled: boolean = false;
  private magnifyingGlass: HTMLDivElement | null = null;

  private isSelectableZoomEnabled: boolean = false; // Flag to track selectable zoom mode
  private selectionRect: HTMLDivElement | null = null; // Reference to the selection rectangle

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fitWindow = this.dataService.getFitWindowClass();
    this.updateImageSource();
    this.dataService.page$.subscribe(() => this.updateImageSource());
    this.currentPageIndex = this.dataService.getPageData();
  }

  private updateImageSource(): void {
    const folderIndex = this.dataService.getFolderData();
    const documentData = this.dataService.getDocumentData();

    if (
      documentData &&
      folderIndex !== undefined &&
      documentData[folderIndex]
    ) {
      this.imageSource = documentData[folderIndex].pages[this.currentPageIndex];
      this.dataService.setImageData(this.imageSource);
    }
  }

  getTotalPages(): number {
    const folderIndex = this.dataService.getFolderData();
    const documentData = this.dataService.getDocumentData();

    if (documentData && folderIndex !== undefined) {
      return documentData[folderIndex].pages.length;
    }

    return 0;
  }

  // Zoom function //
  // Method to handle zooming in
  zoomIn(): void {
    if (this.zoomLevel < this.maxZoomLevel) {
      this.zoomLevel += 10; // Increment zoom level by 10%
      this.resizeImage();
    }
  }

  // Method to handle zooming out
  zoomOut(): void {
    if (this.zoomLevel > this.minZoomLevel) {
      this.zoomLevel -= 10; // Decrement zoom level by 10%
      this.resizeImage();
    }
  }

  // Method to resize the image based on the current zoom level
  private resizeImage(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      const originalWidth = imageElement.naturalWidth;
      const originalHeight = imageElement.naturalHeight;

      const newWidth = (originalWidth * this.zoomLevel) / 100;
      const newHeight = (originalHeight * this.zoomLevel) / 100;

      imageElement.style.width = `${newWidth}px`;
      imageElement.style.height = `${newHeight}px`;
    }
  }

  // Vertical/horizontal zoom function //
  fitVertical(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      imageElement.style.width = '100%';
      imageElement.style.height = '100%';
      imageElement.style.objectFit = 'fill';
    }
  }

  // Method to stretch image horizontally
  fitHorizontal(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      imageElement.style.width = '100%';
      imageElement.style.height = 'auto';
      imageElement.style.objectFit = 'fill';
    }
  }

  fullPage(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      imageElement.style.width = '100%';
      imageElement.style.height = 'auto';
      imageElement.style.objectFit = 'fill';
    }
  }

  // Method to display image at actual size
  displayActualSize(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      imageElement.style.width = 'auto';
      imageElement.style.height = 'auto';
      this.zoomLevel = 60; // Reset zoom level
      this.resizeImage(); // Ensure the image is resized correctly
    }
  }

// Method to toggle magnifying glass
toggleMagnifyingGlass(): void {
  if (this.isMagnifyingGlassEnabled) {
    this.disableMagnifyingGlass();
  } else {
    this.enableMagnifyingGlass();
  }
}

enableMagnifyingGlass(): void {
  const imageElement = document.getElementById('displayedImage') as HTMLImageElement;
  if (imageElement) {
    this.isMagnifyingGlassEnabled = true;

    // Hide the cursor over the image element
    imageElement.style.cursor = 'none';

    // Create magnifying glass element if not already created
    if (!this.magnifyingGlass) {
      this.magnifyingGlass = document.createElement('div');
      this.magnifyingGlass.style.width = '300px'; // Adjust width of the magnifying glass as needed
      this.magnifyingGlass.style.height = '200px'; // Adjust height of the magnifying glass as needed
      this.magnifyingGlass.style.position = 'absolute';
      this.magnifyingGlass.style.border = '1px solid #ccc'; // Magnifying glass border style
      // Remove this.magnifyingGlass.style.borderRadius to make it a rectangle
      this.magnifyingGlass.style.pointerEvents = 'none'; // Ignore mouse events so it doesn't interfere with image interaction
      this.magnifyingGlass.style.display = 'none'; // Initially hide the magnifying glass
      document.body.appendChild(this.magnifyingGlass);
    }

    // Update magnifying glass position and show it on mouse move
    imageElement.onmousemove = (e) => {
      if (this.isMagnifyingGlassEnabled && this.magnifyingGlass) {
        const rect = imageElement.getBoundingClientRect();
        const scaleX = imageElement.naturalWidth / imageElement.offsetWidth;
        const scaleY = imageElement.naturalHeight / imageElement.offsetHeight;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const offsetX = 150; // Offset for the magnifying glass center
        const offsetY = 100;

        const bgPosX = -mouseX * scaleX + offsetX;
        const bgPosY = -mouseY * scaleY + offsetY;

        this.magnifyingGlass.style.backgroundImage = `url('${imageElement.src}')`;
        this.magnifyingGlass.style.backgroundSize = `${imageElement.width * scaleX}px ${imageElement.height * scaleY}px`;
        this.magnifyingGlass.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
        this.magnifyingGlass.style.left = `${e.pageX - offsetX}px`;
        this.magnifyingGlass.style.top = `${e.pageY - offsetY}px`;
        this.magnifyingGlass.style.display = 'block';
      }
    };

    // Hide magnifying glass on mouse leave
    imageElement.onmouseleave = () => {
      if (this.magnifyingGlass) {
        this.magnifyingGlass.style.display = 'none';
        imageElement.style.cursor = ''; // Reset cursor to default
      }
    };
  }
}

// Method to disable magnifying glass
disableMagnifyingGlass(): void {
  const imageElement = document.getElementById('displayedImage') as HTMLImageElement;
  if (imageElement && this.magnifyingGlass) {
    this.isMagnifyingGlassEnabled = false;

    // Remove magnifying glass element from the DOM
    this.magnifyingGlass.remove();
    this.magnifyingGlass = null;

    // Reset imageElement mouse events
    imageElement.onmousemove = null;
    imageElement.onmouseleave = null;

    // Reset the cursor to default
    imageElement.style.cursor = '';
  }
}

  // enableSelectableZoom //
  enableSelectableZoom(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      if (this.isSelectableZoomEnabled) {
        // Disable selectable zoom mode
        this.disableSelectableZoom();
        return;
      }

      this.isSelectableZoomEnabled = true;
      let isSelecting = false;
      let startX = 0;
      let startY = 0;
      let endX = 0;
      let endY = 0;
      let rect: HTMLDivElement | null = null;

      imageElement.style.cursor = 'crosshair';

      // Function to handle mousedown event for starting selection
      const handleMouseDown = (e: MouseEvent) => {
        isSelecting = true;
        startX = e.clientX;
        startY = e.clientY;

        rect = document.createElement('div');
        rect.style.border = '2px dashed #000';
        rect.style.position = 'absolute';
        rect.style.zIndex = '1000';
        document.body.appendChild(rect);
      };

      // Function to handle mousemove event for updating selection rectangle
      const handleMouseMove = (e: MouseEvent) => {
        if (isSelecting && rect) {
          endX = e.clientX;
          endY = e.clientY;
          const left = Math.min(startX, endX);
          const top = Math.min(startY, endY);
          const width = Math.abs(endX - startX);
          const height = Math.abs(endY - startY);

          rect.style.left = `${left}px`;
          rect.style.top = `${top}px`;
          rect.style.width = `${width}px`;
          rect.style.height = `${height}px`;
        }
      };

      // Function to handle mouseup event for finishing selection
      const handleMouseUp = () => {
        if (isSelecting && rect) {
          isSelecting = false;
          const selectionWidth = Math.abs(endX - startX);
          const selectionHeight = Math.abs(endY - startY);

          // Calculate the zoom level to fit the selected area
          const imageRect = imageElement.getBoundingClientRect();
          const imageWidth = imageRect.width;
          const imageHeight = imageRect.height;

          const widthRatio = imageWidth / selectionWidth;
          const heightRatio = imageHeight / selectionHeight;
          const zoomRatio = Math.min(widthRatio, heightRatio) * 100;

          // Apply the zoom level only if a valid selection was made
          if (selectionWidth > 0 && selectionHeight > 0) {
            // Calculate the new size and position of the image to fit the selected area
            const newWidth = (imageElement.naturalWidth * zoomRatio) / 100;
            const newHeight = (imageElement.naturalHeight * zoomRatio) / 100;

            const offsetX = (startX - imageRect.left) * (newWidth / imageWidth);
            const offsetY =
              (startY - imageRect.top) * (newHeight / imageHeight);

            // Apply the zoom level and reposition the image
            imageElement.style.width = `${newWidth}px`;
            imageElement.style.height = `${newHeight}px`;
            imageElement.style.transformOrigin = `${offsetX}px ${offsetY}px`;
            imageElement.style.transform = `scale(${zoomRatio / 100})`;
          }

          // Clean up selection rectangle
          document.body.removeChild(rect);
          rect = null;
        }

        // Remove event listeners after selection
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        // Reset cursor style and zoom mode when selection is completed
        imageElement.style.cursor = 'default';
        this.isSelectableZoomEnabled = false;
      };

      // Attach mousedown event listener to initiate selection
      imageElement.addEventListener('mousedown', handleMouseDown);

      // Attach click event listener to disable selectable zoom mode when clicked outside image
      document.addEventListener('click', (e) => {
        if (!imageElement.contains(e.target as Node)) {
          this.disableSelectableZoom();
        }
      });

      // Attach mousemove and mouseup event listeners to handle selection
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  }

  disableSelectableZoom(): void {
    this.isSelectableZoomEnabled = false;
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      imageElement.style.cursor = 'default';
      imageElement.style.transform = 'none'; // Reset transform
    }
  }

  // Method to rotate all images on the current page 90 degrees left
  rotateAllLeft(): void {
    const folderIndex = this.dataService.getFolderData();
    const documentData = this.dataService.getDocumentData();

    if (
      documentData &&
      folderIndex !== undefined &&
      documentData[folderIndex]
    ) {
      documentData[folderIndex].pages.forEach((imageSource) => {
        this.dataService.rotateImageLeft(imageSource);
      });
    }
  }

  // Method to rotate all images on the current page 90 degrees right
  rotateAllRight(): void {
    const folderIndex = this.dataService.getFolderData();
    const documentData = this.dataService.getDocumentData();

    if (
      documentData &&
      folderIndex !== undefined &&
      documentData[folderIndex]
    ) {
      documentData[folderIndex].pages.forEach((imageSource) => {
        this.dataService.rotateImageRight(imageSource);
      });
    }
  }

  // Method to increase brightness
  increaseBrightness(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      this.brightnessLevel += 10;
      imageElement.style.filter = `brightness(${this.brightnessLevel}%)`;
    }
  }

  // Method to reset brightness to original
  resetBrightness(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      this.brightnessLevel = 100;
      imageElement.style.filter = `brightness(${this.brightnessLevel}%)`;
    }
  }

  // Method to decrease brightness
  decreaseBrightness(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      this.brightnessLevel -= 10;
      imageElement.style.filter = `brightness(${this.brightnessLevel}%)`;
    }
  }

  // Method to toggle black and white mode
  toggleBlackWhite(): void {
    const imageElement = document.getElementById(
      'displayedImage'
    ) as HTMLImageElement;
    if (imageElement) {
      this.isBlackWhite = !this.isBlackWhite;
      if (this.isBlackWhite) {
        imageElement.style.filter = 'invert(100%)';
      } else {
        imageElement.style.filter = 'none';
      }
    }
  }

  // Next Page function //
  nextPage(): void {
    const folderIndex = this.dataService.getFolderData();
    const documentData = this.dataService.getDocumentData();

    if (
      documentData &&
      folderIndex !== undefined &&
      this.currentPageIndex < documentData[folderIndex].pages.length - 1
    ) {
      this.currentPageIndex++;
      this.dataService.setPageData(this.currentPageIndex);
    }
  }

  // previousPage function //
  previousPage(): void {
    const folderIndex = this.dataService.getFolderData();
    if (folderIndex !== undefined && this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.dataService.setPageData(this.currentPageIndex);
    }
  }

  // rotateOnly function //
  rotateOnlyLeft(): void {
    this.dataService.rotateImageLeft(this.imageSource);
  }

  rotateOnlyRight(): void {
    this.dataService.rotateImageRight(this.imageSource);
  }
}

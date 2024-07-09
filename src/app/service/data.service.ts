import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private page = new BehaviorSubject<number>(0);
  private folder = new BehaviorSubject<number>(0);
  private fitWindowClass = new BehaviorSubject<string>("");
  private imgSource = new BehaviorSubject<string>("");
  private documentData = new BehaviorSubject<Documentdata[]>([]);
  private rotationStates = new BehaviorSubject<Map<string, number>>(new Map());

  page$ = this.page.asObservable();
  folder$ = this.folder.asObservable();
  fitclass$ = this.fitWindowClass.asObservable();
  documentData$ = this.documentData.asObservable();
  imgSource$ = this.imgSource.asObservable();
  rotationStates$ = this.rotationStates.asObservable();

  private firstBarcode: string | null = null; // Track the first encountered barcode

  // Getter methods
  public getPageData(): number {
    return this.page.getValue();
  }

  public getFolderData(): number {
    return this.folder.getValue();
  }

  public getFitWindowClass(): string {
    return this.fitWindowClass.getValue();
  }

  public getDocumentData(): Documentdata[] {
    return this.documentData.getValue();
  }

  public getImageData(): string {
    return this.imgSource.getValue();
  }

  public getImageByElement(folder: number, page: number): string | undefined {
    const documentData = this.getDocumentData();
    return documentData[folder]?.pages[page];
  }

  public getRotationState(imageSource: string): number {
    return this.rotationStates.getValue().get(imageSource) || 0;
  }

  // Setter methods
  public setPageData(newData: number): void {
    this.page.next(newData);
  }

  public setFolderData(newData: number): void {
    this.folder.next(newData);
  }

  public setFitWindowClass(newData: string): void {
    this.fitWindowClass.next(newData);
  }

  public setDocumentData(newData: Documentdata[]): void {
    // Ensure pages are handled correctly to avoid duplication
    newData.forEach((doc) => {
      doc.pages = Array.from(new Set(doc.pages)); // Remove duplicates if any
    });
    this.documentData.next(newData);
    // Check for the first encountered barcode and update if necessary
    if (newData.length > 0 && !this.firstBarcode) {
      this.firstBarcode = newData[0].barcode;
    }
  }

  public setImageData(newData: string): void {
    this.imgSource.next(newData);
  }

  public setRotationState(imageSource: string, rotation: number): void {
    const currentStates = this.rotationStates.getValue();
    currentStates.set(imageSource, rotation);
    this.rotationStates.next(currentStates);
  }

  // Method to check if a barcode matches the first encountered barcode
  public isBarcodeMatchingFirst(barcode: string): boolean {
    return this.firstBarcode !== null && barcode === this.firstBarcode;
  }

  // Clear first encountered barcode (if needed)
  public clearFirstBarcode(): void {
    this.firstBarcode = null;
  }

  // Methods to rotate the current image
  public rotateImageLeft(imageSource: string): void {
    const currentRotation = this.getRotationState(imageSource);
    this.setRotationState(imageSource, currentRotation - 90);
  }

  public rotateImageRight(imageSource: string): void {
    const currentRotation = this.getRotationState(imageSource);
    this.setRotationState(imageSource, currentRotation + 90);
  }
}

interface Documentdata {
  barcode: string;
  pages: string[];
  tag?: string;
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available globally
})
export class CaseService {
  private apiUrl = 'http://your-api-endpoint.com/cases'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getCases(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

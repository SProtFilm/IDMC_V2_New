import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../models/customerModel';
import { mDocGruopList } from '../models/mdocGroupListModel';
import {mDocument} from '../models/mDocument';
import { mDocCustType } from '../models/mdocCustTypeModel';
import { productType } from '../models/productType';
import { TransactionList } from '../models/mDocTransactionList';

@Injectable({
  providedIn: 'root' // This makes the service available globally
})
export class ProcedureService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  searchBycaNo(acctNbr: string, lang: number): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${this.apiUrl}/findUserbycaNo/${acctNbr}/${lang}`);
  }

  searchByalNo(acctNbr: string, lang: number): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${this.apiUrl}/findUserbyalNo/${acctNbr}/${lang}`);
  }

  searchByacNo(acctNbr: string, lang: number): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${this.apiUrl}/findUserbyacNo/${acctNbr}/${lang}`);
  }

  searchByteleENo(acctNbr: string, lang: number): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${this.apiUrl}/findUserbyteleNo/${acctNbr}/${lang}`);
  }

  searchBylocalRefNo(acctNbr: string, lang: number): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${this.apiUrl}/findUserbylocalNo/${acctNbr}/${lang}`);
  }

  searchByinterLGNo(acctNbr: string, lang: number): Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(`${this.apiUrl}/findUserbyInterLGNo/${acctNbr}/${lang}`);
  }

  mdocGroupList (alang: number): Observable<mDocGruopList[]> {
    return this.http.get<mDocGruopList[]>(`${this.apiUrl}/findmDocGroupList/${alang}`);
  }

  mdocByGroupList (glistnum: number): Observable<mDocument[]> {
    return this.http.get<mDocument[]>(`${this.apiUrl}/findmDocbyGroupList/${glistnum}`);
  }

  mdocCustType (alang:number): Observable<mDocCustType[]> {
    return this.http.get<mDocCustType[]>(`${this.apiUrl}/findmDocCustType/${alang}`);
  }

  mdocByCustType (custTypeNum:number): Observable<mDocument[]> {
    return this.http.get<mDocument[]>(`${this.apiUrl}/findmDocbyCustType/${custTypeNum}`);
  }

  mDocProductList (): Observable<productType[]> {
    return this.http.get<productType[]>(`${this.apiUrl}/findmDocProductList`);
  }

  mDocTransactionList (): Observable<TransactionList[]> {
    return this.http.get<TransactionList[]>(`${this.apiUrl}/findmDoctransactionList`);
  }

  mdocByCode (pcode:number,tcode:number,dcode:String): Observable<mDocument[]> {
    return this.http.get<mDocument[]>(`${this.apiUrl}/findmDocByCode/${pcode}/${tcode}/${dcode}`);
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private pageLink = new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient
  ) {

  }
  setPageLink(event) {
    localStorage.setItem('pages', event);
    this.pageLink.next(event);
  }
  getlocal(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/').pipe(
      catchError(err => of(null))
    );
  }
  getlocalID(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(
      catchError(err => of(null))
    );
  }
  getPageLink(): Observable<any> {
    return this.pageLink.asObservable()
  }
}

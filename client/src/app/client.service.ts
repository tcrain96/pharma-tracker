import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from './models/client';

@Injectable()
export class ClientService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + '/')
      .pipe(
        catchError(this.handleError)
      );
  }

  createClient(clientData: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl + '/createClient', clientData)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateClient(id:string, clientData: Client): Observable<Client> {
    return this.http.put<Client>(this.baseUrl + '/updateClient/' + id, clientData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/deleteClient/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
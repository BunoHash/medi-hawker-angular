import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`);
}

public post<T>(url: string, body): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, body);
}

public put<T>(url: string, body): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, body);
}

public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${url}`);
}

public patch<T>(url: string, body: string): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${url}`, body);
}
}
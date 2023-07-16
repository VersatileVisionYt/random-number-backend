import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class RandomNGService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getRandomNumber() :Observable<number> {
    const url = `${this.backendUrl}/api/random-number/generate`;
    const data = { /* any request payload */ };

    return this.http.post<number>(url, data);
  }
}

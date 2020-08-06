import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  url: string = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      map((result) => {
        return (result as any).persons;
      })
    );
  }

  addOne(requestBody) {
    return this.http.post(this.url, requestBody).pipe(
      map((result) => {
        return result as any;
      })
    );
  }
}

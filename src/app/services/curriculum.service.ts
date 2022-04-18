import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculum } from '../models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient) {
  }

  getCv(name = 'profile'): Observable<Curriculum> {
    return this.http.get<Curriculum>(`assets/${name}.json`);
  }
}

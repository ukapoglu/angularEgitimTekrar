import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url = 'http://localhost:9898/api/';

  constructor(private http: HttpClient) {
  }

  postla(ext: string, obje: any): Observable<any> {
    return this.http.post(this.url + ext, obje);
  }

  getle(ext: string): Observable<any> {
    return this.http.get(this.url + ext);
  }

  putla(ext: string, obje: any): Observable<any> {
    return this.http.put(this.url + ext, obje);
  }
}

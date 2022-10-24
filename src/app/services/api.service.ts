import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://api.publicapis.org/entries";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }

  getApiDetails():Observable<any>{
    return this.http.get(API_URL);
  }

}

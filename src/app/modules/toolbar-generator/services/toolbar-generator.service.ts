import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as config from '@tbgen/env/environment';


@Injectable({
  providedIn: 'root'
})
export class ToolbarGeneratorService {
  
  constructor(private http: HttpClient) { 
    
  }

  getToolbarIcons(): Observable<any>{
    let url = config.environment.iconservicemock;
    return this.http.get(url).pipe(
      map((response: Response)=>{
        return response;
      }));
    }
}

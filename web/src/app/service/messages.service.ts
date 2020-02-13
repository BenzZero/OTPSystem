import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient,
    private authen: AuthenService
  ) { }

  getMessages(type: string): Object {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${this.authen.getAuthen()}`
    })
    let params = new HttpParams().set('type', type);
    return this.http.get(`${environment.apiUrl}/messages`, { headers: headers, params: params })
      .toPromise().then((res: Response) => res)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient
  ) { }

  getMessages(type: string): Object {
    return this.http.post(`${environment.apiUrl}/messages`, { type })
      .toPromise().then((res: Response) => res)
  }
}

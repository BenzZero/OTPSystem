import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  authorization = 'authorization'
  constructor(
    private http: HttpClient
  ) { }

  setAuthen(token: string) {
    localStorage.setItem(this.authorization, token)
  }

  getAuthen(): string {
    return localStorage.getItem(this.authorization)
  }


  isAuthen() {
    let currentState = localStorage.getItem(this.authorization)
    if (currentState) {
      return true
    } else {
      return false
    }
  }

  login(username: string, password: string): Object {
    return this.http.post(`${environment.apiUrl}/login`, { username, password })
      .toPromise().then((res: Response) => res)
  }

  logout() {
    localStorage.removeItem(this.authorization);
  }
}

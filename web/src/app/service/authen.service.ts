import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  authorization = 'authorization'
  user = {}

  constructor(
    private http: HttpClient
  ) { }

  setAuthen(token: string) {
    localStorage.setItem(this.authorization, token)
  }

  getUser(): object {
    return this.user
  }

  setUser(user: object) {
    this.user = user
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

  async changePassword(oldPassword: string, password: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${this.getAuthen()}`
    })
    let checkToken = await <any>this.http.post(`${environment.apiUrl}/setting_account`,
      { password: oldPassword, passwordConfirm: password },
      { headers: headers })
      .toPromise().then((res: Response) => res)
  }

  async checkToken() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${this.getAuthen()}`
    })
    let checkToken = await <any>this.http.get(`${environment.apiUrl}/checkToken`, { headers: headers })
      .toPromise().then((res: Response) => res)
    if (checkToken.id) {
      this.setUser(checkToken)
      return true
    } else {
      this.logout()
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(
    private http: HttpClient
  ) { }

  isAuthen() {
    let currentState = localStorage.getItem('authorization')
    if (currentState) {
      return true
    } else {
      return false
    }
  }

  login(username: string, password: string) {
    console.log(username, password)
    // return this.http.post<any>(`api/users/authenticate`, { username, password })
    //   .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       // this.currentUserSubject.next(user);
    //     }

    //     return user;
    //   }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }
}

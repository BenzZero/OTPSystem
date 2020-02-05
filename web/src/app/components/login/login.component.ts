import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  constructor(
    private authen: AuthenService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authen.isAuthen()) {
      this.router.navigate(['messages', ''])
    } else {
      this.router.navigate(['login'])
    }
  }

  async onSubmit() {
    let res = <any>await this.authen.login(this.username, this.password)
    if (res.success) {
      this.authen.setAuthen(res.token)
      this.router.navigate(['messages'])
    } else {
      console.log(res.error)
    }
    return false
  }


}

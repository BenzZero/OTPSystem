import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html'
})
export class SettingComponent implements OnInit {
  user: object
  oldpassword: string
  newpassword: string
  confirmpassword: string

  constructor(
    private authen: AuthenService
  ) { }

  ngOnInit() {
    this.user = this.authen.getUser()
  }

  ngDoCheck() {
    this.user = this.authen.getUser()
  }

  async onSubmitChangePassword() {
    let res
    if (this.confirmpassword === this.newpassword)
      res = <any>await this.authen.changePassword(this.oldpassword, this.confirmpassword)
    else
      console.log('password not match')
    return false
  }
}

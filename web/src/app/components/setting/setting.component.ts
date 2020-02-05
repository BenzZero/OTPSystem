import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html'
})
export class SettingComponent implements OnInit {
  user: object
  constructor(
    private authen: AuthenService
  ) { }

  ngOnInit() {
    this.user = this.authen.getUser()
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenService } from 'src/app/service/authen.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  param: string
  sub: any
  user: object

  constructor(
    private activatedRouter: ActivatedRoute,
    private authen: AuthenService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.user = await this.authen.getUser()
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.param = params['type'];
    });
  }

  onClickLogout() {
    this.authen.logout()
    this.router.navigate(['login'])
  }
}

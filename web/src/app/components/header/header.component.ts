import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenService } from 'src/app/service/authen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  param: string
  sub: any

  constructor(
    private activatedRouter: ActivatedRoute,
    private authen: AuthenService,
    private router: Router
    ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.param = params['type'];
    });
  }

  onClickLogout() {
    this.authen.logout()
    this.router.navigate(['login'])
  }
}

import { Component } from '@angular/core';
import { AuthenService } from './service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'web'
  isAuthen = false

  constructor(
    private authen: AuthenService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.isAuthen = await this.authen.checkToken()
    this.router.navigate(['login'])
  }

  ngDoCheck() {
    this.isAuthen = this.authen.isAuthen()
  }
}

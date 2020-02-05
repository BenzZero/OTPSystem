import { Component } from '@angular/core';
import { AuthenService } from './service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'web';

  constructor(
    private authen: AuthenService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.authen.checkToken()
    this.router.navigate(['login'])
  }
}

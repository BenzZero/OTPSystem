import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
  onSubmit() {
    console.log(this)
    return false
  }
}
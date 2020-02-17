import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  year: number
  constructor() { }

  ngOnInit() {
    var d = new Date();
    this.year = d.getFullYear();
  }

}

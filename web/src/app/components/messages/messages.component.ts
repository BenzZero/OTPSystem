import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  type: string
  private sub: any

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => this.type = params.type)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

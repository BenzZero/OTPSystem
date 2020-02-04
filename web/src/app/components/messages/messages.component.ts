import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  type: string
  private sub: any

  constructor(
    private router: ActivatedRoute,
    private messages: MessagesService
  ) { }

  ngOnInit() {
    this.sub = this.router.snapshot.paramMap.get('type')
    console.log(this.sub)
    this.messages.getMessages(this.sub)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  messages: Array<object>
  param: string
  sub: any

  constructor(
    private router: ActivatedRoute,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.param = params['type'];
      this.ngCallService(); // reset and set based on new parameter this time
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async ngCallService() {
    this.messages = await <object[]>this.messagesService.getMessages(this.param)
  }
}

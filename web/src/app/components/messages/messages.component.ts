import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  messages: Array<object>
  private sub: any

  constructor(
    private router: ActivatedRoute,
    private messagesService: MessagesService
  ) { }

  async ngOnInit() {
    this.sub = this.router.snapshot.paramMap.get('type')
    this.messages = await <object[]>this.messagesService.getMessages(this.sub)
    console.log(this.messages)
  }
}

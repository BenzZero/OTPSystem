import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/service/messages.service';
import { Observable } from 'rxjs';

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
    this.sub = this.router.params.subscribe(params => this.type = params.type)
    const id: Observable<string> = this.router.params.pipe(<any>map(p => p.type));
    console.log(this.router.params)
    // this.messages.getMessages()
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

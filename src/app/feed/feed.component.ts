import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed:Observable<ChatMessage[][]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    //let val = this.chat.getMessages();
    this.feed =this.chat.getMessages().valueChanges();  //this.db.list('/messages', ref =>ref.limitToLast(25).orderByKey());
    //this.chat.getMessages();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages().valueChanges();
  }

}
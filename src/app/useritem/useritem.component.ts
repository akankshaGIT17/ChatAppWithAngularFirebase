import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UserItemComponent {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
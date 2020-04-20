import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import {FirebaseListObservable } from '@angular/fire/'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-message.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: any;//Observable<string>

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe(auth => {
          if (auth !== undefined && auth !== null) {
            this.user = auth;
          }

          this.getUser().valueChanges().subscribe(a => {
            var data = a as User;
            this.userName = data.displayName;
          });
        });
    }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }

  sendMessage(msg: string) {
    let date = new Date();
    const timestamp =this.getTimeStamp();
    const email = 'test@exaple.com';//this.user.email;
    // this.chatMessages  = this.getMessages();
    // this.chatMessages.subscribe(e=>e.push({
    //   message: msg,
    //   timeSent: timestamp,
    //   userName: 'test user',//this.userName,
    //   email: email }));  
    let chtMessages= this.db.list('/messages', ref =>ref.limitToLast(25).orderByKey());
     
    chtMessages.push({
        message: msg,
        timeSent: this.getTimeStamp(),
        userName: this.userName,
        email: email });
    let chtListObservable = chtMessages.snapshotChanges();
    chtListObservable.subscribe();
}
// getMessages():AngularFireList<ChatMessage[]> {
//   // query to create our message feed binding
//   return this.db.list('/messages', ref => {
//     return ref.limitToLast(25).orderByKey()});
// }
getMessages(): AngularFireList<ChatMessage[]> {
  // query to create our message feed binding
 return this.db.list('/messages', ref => ref.orderByKey().limitToLast(25));
 }

getTimeStamp() {
  const now = new Date();
  const date = now.getUTCFullYear() + '/' +
               (now.getUTCMonth() + 1) + '/' +
               now.getUTCDate();
  const time = now.getUTCHours() + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (date + ' ' + time);
}
}
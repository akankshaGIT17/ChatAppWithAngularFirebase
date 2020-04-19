import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-chartroom',
  templateUrl: './chartroom.component.html',
  styleUrls: ['./chartroom.component.css']
})
export class ChartroomComponent implements OnInit {
  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
    = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}

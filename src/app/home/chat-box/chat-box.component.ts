// Example: chat-box.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent {
  @Output() messageSent = new EventEmitter<string>()
  messages: string[] = [];
  messageInput: string = '';

  sendMessage() {
    if (this.messageInput.trim() !== '') {
      this.messages.push(this.messageInput);
      this.messageInput = '';
      this.messageSent.emit(this.messageInput);
    }
  }
}

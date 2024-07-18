import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  messages: string[] = [];
  messageInput: string = '';
  profile: { image: string; description: string } | null = null;

  sendMessage() {
    if (this.messageInput.trim()) {
      this.messages.unshift(this.messageInput);
      this.messageInput = '';

      this.profile = {
        image: 'https://via.placeholder.com/100', // Placeholder image URL
        description: 'This is a profile description'
      };
    }
  }
}

// profile-card.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: 'profile-card.component.html',
  styleUrls: ['profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  isLoading: boolean = true;
  profile: any = {}; // Replace with actual profile interface/type

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
      // Replace with actual profile data fetching logic
      this.profile = {
        name: 'John Doe',
        photoUrl: 'assets/profiles/john-doe.jpg',
      };
    }, 2000); // Adjust time as needed
  }
}

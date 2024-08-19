import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  photo: string | undefined;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      interests: ['']
    });
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      this.photo = image.webPath;
    } catch (error) {
      console.error('Error taking photo', error);
    }
  }

  saveProfile() {
    if (this.profileForm.valid) {
      const profileData = {
        ...this.profileForm.value,
        photoUrl: this.photo
      };
      console.log('Profile Data:', profileData);
      this.router.navigate(['/home']);
    }
  }
}

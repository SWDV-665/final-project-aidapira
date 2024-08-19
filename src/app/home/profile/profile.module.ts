import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule // Include ReactiveFormsModule here if ProfileComponent uses reactive forms
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {}

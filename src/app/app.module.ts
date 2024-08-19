import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './home/profile/profile.module'; // Import ProfileModule

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

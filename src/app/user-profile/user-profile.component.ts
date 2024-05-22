import { Component } from '@angular/core';
import { User } from '../Interface/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: User = {
    name: 'Delafon',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isHidden: boolean = true;

  isAdmin: boolean = true;

  showAlert(): void {
    this.isHidden = !this.isHidden
  }
}

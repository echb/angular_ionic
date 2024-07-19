import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { UserService, User } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  private data = inject(UserService);
  constructor() {
    this.getUsers()
  }

  public users: User[] = [];

  getUsers() {
    this.data.getUsers()
      .subscribe(
        res => this.users = res,
        err => {
          this.users = []
          console.log('HTTP Error', err)
        },
      )
  }
}

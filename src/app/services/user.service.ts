import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: any = null;

  get user() {
    return this._user;
  }

  set user(value: any) {
    this._user = value;
  }
}

import { Injectable } from '@angular/core';
import {UserLdap} from "../models/user-ldap";
import {LDAP_USERS} from "../models/ldap-mock-data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: UserLdap[] = LDAP_USERS;

  getUsers(login: any): Observable<UserLdap> {
    return of(this.users.find(user => user.login === login));
  }

  constructor() {
  }

}

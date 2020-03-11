import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginFormModel, LoginStateModel } from '../state/login.model';
import { LoginState } from '../state/login.state';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private loginState: LoginState, private http: HttpClient) {}

  login(data: LoginFormModel) {
    return this.http
      .post<string>('http://www.mocky.io/v2/5e6566a23100006300239937', data)
      .pipe(
        tap(token => {
          console.log({ token });
          this.loginState.update({ token, username: data.username });
        })
      );
  }

  logout() {
    return this.http
      .post<boolean>('http://www.mocky.io/v2/5e65723c3100006400239954', {})
      .pipe(
        tap(() => {
          this.loginState.update({} as LoginStateModel);
        })
      );
  }
}

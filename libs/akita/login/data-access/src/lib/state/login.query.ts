import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LoginStateModel } from './login.model';
import { LoginState } from './login.state';

@Injectable({ providedIn: 'root' })
export class LoginQuery extends Query<LoginStateModel> {
  token$ = this.select(({ token }: LoginStateModel) => token);
  needAuthentication$ = this.select(({ token }: LoginStateModel) => !!!token);
  isAuthenticated$ = this.select(({ token }: LoginStateModel) => !!token);
  username$ = this.select(({ username }: LoginStateModel) => username);

  constructor(protected loginState: LoginState) {
    super(loginState);
  }

  updateUsername(username: string) {
    this.loginState.update({ username });
  }
}

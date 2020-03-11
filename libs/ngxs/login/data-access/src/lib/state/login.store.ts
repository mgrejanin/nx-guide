import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginRestService } from '../services/login.rest.service';
import { LoginStateModel } from '../../symbols';
import { Login, Logout } from './login.actions';

@State<LoginStateModel>({
  name: 'login',
  defaults: {} as LoginStateModel
})
@Injectable()
export class LoginState {
  constructor(private authService: LoginRestService) {}

  @Selector()
  static token(state: LoginStateModel): string | null {
    return state.token;
  }

  @Selector()
  static needsAuthentication(state: LoginStateModel): boolean {
    return !!!state.token;
  }

  @Selector()
  static isAuthenticated(state: LoginStateModel): boolean {
    return !!state.token;
  }

  @Selector()
  static username({ username }: LoginStateModel): string {
    return username;
  }

  @Action(Login)
  login(
    { patchState, dispatch }: StateContext<LoginStateModel>,
    action: Login
  ) {
    return this.authService.login(action.payload).pipe(
      tap((token: string) => {
        patchState({
          token: token,
          username: action.payload.username
        });
        dispatch(new Navigate(['/home']));
      }),
      catchError(e => throwError(e))
    );
  }

  @Action(Logout)
  logout({ getState, setState, dispatch }: StateContext<LoginStateModel>) {
    return this.authService.logout(getState().token).pipe(
      tap(() => {
        setState({} as LoginStateModel);
        dispatch(new Navigate(['/login']));
      }),
      catchError(e => throwError(e))
    );
  }
}

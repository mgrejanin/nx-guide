import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Login, Logout } from './login.actions';
import { LoginRestService } from '../services/login.rest.service';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginStateModel } from '../../symbols';
const INITIAL_STATE: LoginStateModel = {
    token: '',
    username: '',
};

@State<LoginStateModel>({
    name: 'login',
    defaults: INITIAL_STATE,
})
@Injectable()
export class LoginState {
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
    constructor(private authService: LoginRestService) {}

    @Action(Login)
    login({ patchState, dispatch }: StateContext<LoginStateModel>, action: Login) {
        return this.authService.login(action.payload).pipe(
            tap((token: string) => {
                patchState({
                    token,
                    username: action.payload.username,
                });
                dispatch(new Navigate(['/home']));
            }),
            catchError(e => throwError(e)),
        );
    }

    @Action(Logout)
    logout({ getState, setState, dispatch }: StateContext<LoginStateModel>) {
        return this.authService.logout(getState().token).pipe(
            tap(() => {
                setState(INITIAL_STATE);
                dispatch(new Navigate(['/login']));
            }),
            catchError(e => throwError(e)),
        );
    }
}

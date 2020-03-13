import { Component } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { LoginState, Logout } from '@nx-guide/ngxs/login/data-access';
import { Observable } from 'rxjs';

@Component({
    selector: 'nx-guide-shared-home-feature-container',
    template: `
        <nx-guide-home-component [username]="username$ | async" (logout)="logout()"></nx-guide-home-component>
    `,
})
export class NgxsHomeFeatureContainer {
    @Select(LoginState.username)
    username$: Observable<string>;

    constructor(private store: Store) {}

    logout() {
        this.store.dispatch(new Logout());
    }
}

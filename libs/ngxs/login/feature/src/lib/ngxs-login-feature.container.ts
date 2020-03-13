import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login, LoginFormModel } from '@nx-guide/ngxs/login/data-access';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'nx-guide-login-feature-container',
    template: `
        <nx-guide-login-ui (login)="login($event)"></nx-guide-login-ui>
    `,
})
export class NgxsLoginFeatureContainer {
    constructor(private store: Store) {}

    login(data: LoginFormModel) {
        this.store.dispatch(new Login(data));
    }
}

import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createLoginInitialState, LoginStateModel } from './login.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'login' })
export class LoginState extends Store<LoginStateModel> {
    constructor() {
        super(createLoginInitialState());
    }
}

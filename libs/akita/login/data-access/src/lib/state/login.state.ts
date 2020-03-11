import { StoreConfig, Store } from '@datorama/akita';
import { LoginStateModel } from './login.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'login' })
export class LoginState extends Store<LoginStateModel> {
  constructor() {
    super({} as LoginStateModel);
  }
}

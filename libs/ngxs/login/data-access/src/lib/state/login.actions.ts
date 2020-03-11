import { LoginFormModel } from '../../symbols';

export class Login {
  static readonly type = '[Login] Do user login';
  constructor(public payload: LoginFormModel) {}
}

export class Logout {
  static readonly type = '[Logout] Do user logout';
}

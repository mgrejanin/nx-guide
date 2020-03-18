import { LoginFormModel } from '../../symbols';

export class Login {
  static readonly type = '[Login] Do user login';
  constructor(public payload: LoginFormModel) {}
}

// tslint:disable-next-line: max-classes-per-file
export class Logout {
  static readonly type = '[Logout] Do user logout';
}

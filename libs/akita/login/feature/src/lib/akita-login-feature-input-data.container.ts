import { Component } from '@angular/core';
import {
  LoginFormModel,
  LoginService
} from '@nx-guide/akita/login/data-access';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'nx-guide-akita-login-input-data-feature-container',
  template: `
    <nx-guide-login-ui (login)="login($event)"></nx-guide-login-ui>
  `
})
export class AkitaLoginInputDataFeatureContainer {
  constructor(private loginService: LoginService, private router: Router) {}

  login(data: LoginFormModel) {
    this.loginService
      .login(data)
      .pipe(
        catchError(e => throwError(e)),
        tap(() => {
          this.router.navigate(['/home']);
        })
      )
      .subscribe();
  }
}

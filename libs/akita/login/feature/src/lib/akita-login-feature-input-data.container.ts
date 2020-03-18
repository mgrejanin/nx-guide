import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormModel, LoginService } from '@nx-guide/akita/login/data-access';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Component({
  selector: 'nx-guide-akita-login-input-data-feature-container',
  template: `
    <nx-guide-login-ui (login)="login($event)"></nx-guide-login-ui>
  `,
})
export class AkitaLoginInputDataFeatureComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  login(data: LoginFormModel) {
    this.loginService
      .login(data)
      .pipe(
        catchError(e => throwError(e)),
        tap(async () => {
          await this.router.navigate(['/home']);
        }),
      )
      .subscribe();
  }
}

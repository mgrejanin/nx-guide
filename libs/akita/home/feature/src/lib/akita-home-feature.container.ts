import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginQuery, LoginService } from '@nx-guide/akita/login/data-access';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-akita-home-container',
  template: `
    <app-akita-home-ui [username]="username$ | async" (logout)='logout()'></app-akita-home-ui>
  `
})
export class AkitaHomeFeatureContainer implements OnInit {
  username$: Observable<string>;

  constructor(
    private loginQuery: LoginQuery,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.username$ = this.loginQuery.username$;
  }

  logout() {
    this.loginService
      .logout()
      .pipe(
        catchError(e => throwError(e)),
        tap(() => this.router.navigate(['/login']))
      )
      .subscribe();
  }
}

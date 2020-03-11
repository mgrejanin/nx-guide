import { Component, OnInit } from '@angular/core';
import { LoginQuery } from '@nx-guide/akita/login/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-akita-home-container',
  template: `
    <app-akita-home-ui [username]='username$ | async'></app-akita-home-ui>
  `
})
export class AkitaHomeFeatureContainer implements OnInit {
  username$: Observable<string>;

  constructor(private loginQuery: LoginQuery) {}

  ngOnInit() {
    this.username$ = this.loginQuery.username$;
  }
}

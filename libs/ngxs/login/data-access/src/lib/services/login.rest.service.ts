import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { LoginFormModel } from '../../symbols';

@Injectable()
export class LoginRestService {
  constructor(private http: HttpClient) {}

  login(data: LoginFormModel): Observable<string> {
    return this.http.post<string>('http://www.mocky.io/v2/5e6566a23100006300239937', data).pipe(pluck('token'));
  }

  logout(token: string): Observable<boolean> {
    return this.http.post<boolean>('http://www.mocky.io/v2/5e65723c3100006400239954', { token });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nx-guide-login-ui',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // TODO Nao posso importar LoginFormModel, porque uma lib compartilhada nao deve depender de uma lib especifica de app
  formMock: { username: string; password: string } = {
    username: 'mauricio.grejanin@picpay.com',
    password: 'picpay',
  };
  @Output() forgotPassword = new EventEmitter();
  @Output() login = new EventEmitter();
}

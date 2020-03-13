import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LoginRestService } from './services/login.rest.service';
import { LoginState } from './state/login.store';

@NgModule({
    imports: [CommonModule, NgxsModule.forFeature([LoginState])],
    providers: [LoginRestService],
})
export class NgxsLoginDataAccessModule {}

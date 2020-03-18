import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsLoginDataAccessModule } from '@nx-guide/ngxs/login/data-access';
import { SharedLoginUiModule } from '@nx-guide/shared/login/ui';
import { NgxsLoginFeatureComponent } from './ngxs-login-feature.container';

@NgModule({
  declarations: [NgxsLoginFeatureComponent],
  imports: [
    SharedLoginUiModule,
    CommonModule,
    NgxsLoginDataAccessModule,
    RouterModule.forChild([{ path: '', component: NgxsLoginFeatureComponent }]),
  ],
})
export class NgxsLoginFeatureModule {}

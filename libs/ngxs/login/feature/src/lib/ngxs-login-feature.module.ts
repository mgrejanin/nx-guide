import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsLoginFeatureContainer } from './ngxs-login-feature.container';

@NgModule({
  declarations: [NgxsLoginFeatureContainer],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NgxsLoginFeatureContainer }])
  ]
})
export class NgxsLoginFeatureModule {}

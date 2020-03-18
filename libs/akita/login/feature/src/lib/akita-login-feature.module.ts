import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedLoginUiModule } from '@nx-guide/shared/login/ui';
import { AkitaLoginInputDataFeatureComponent } from './akita-login-feature-input-data.container';
import { AkitaLoginFeatureComponent } from './akita-login-feature.container';

@NgModule({
  declarations: [AkitaLoginFeatureComponent, AkitaLoginInputDataFeatureComponent],
  imports: [
    CommonModule,
    SharedLoginUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AkitaLoginFeatureComponent,
        children: [{ path: '', component: AkitaLoginInputDataFeatureComponent }],
      },
    ]),
  ],
})
export class AkitaLoginFeatureModule {}

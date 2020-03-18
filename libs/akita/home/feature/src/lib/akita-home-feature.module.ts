import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AkitaHomeUiModule } from '@nx-guide/akita/home/ui';
import { SharedLoginUiModule } from '@nx-guide/shared/login/ui';
import { AkitaHomeFeatureComponent } from './akita-home-feature.container';

@NgModule({
  declarations: [AkitaHomeFeatureComponent],
  imports: [
    CommonModule,
    SharedLoginUiModule,
    AkitaHomeUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AkitaHomeFeatureComponent,
      },
    ]),
  ],
})
export class AkitaHomeFeatureModule {}

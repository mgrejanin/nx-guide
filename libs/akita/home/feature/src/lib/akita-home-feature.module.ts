import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedLoginUiModule } from '@nx-guide/shared/login/ui';
import { AkitaHomeFeatureContainer } from './akita-home-feature.container';
import { AkitaHomeUiModule } from "@nx-guide/akita/home/ui";

@NgModule({
  declarations: [AkitaHomeFeatureContainer],
  imports: [
    CommonModule,
    SharedLoginUiModule,
    AkitaHomeUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AkitaHomeFeatureContainer
      }
    ])
  ]
})
export class AkitaHomeFeatureModule {}

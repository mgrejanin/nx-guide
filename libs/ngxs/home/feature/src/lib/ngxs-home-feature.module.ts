import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsHomeUiModule } from '@nx-guide/ngxs/home/ui';
import { NgxsHomeFeatureContainer } from './ngxs-home-feature.container';

@NgModule({
  declarations: [NgxsHomeFeatureContainer],
  imports: [
    CommonModule,
    NgxsHomeUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: NgxsHomeFeatureContainer
        // canActivate: [AuthGuard]
      }
    ])
  ]
})
export class NgxsHomeFeatureModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsLoginDataAccessModule } from '@nx-guide/ngxs/login/data-access';
import { SharedLoginUiModule } from '@nx-guide/shared/login/ui';
import { NgxsLoginFeatureContainer } from './ngxs-login-feature.container';

@NgModule({
    declarations: [NgxsLoginFeatureContainer],
    imports: [
        SharedLoginUiModule,
        CommonModule,
        NgxsLoginDataAccessModule,
        RouterModule.forChild([{ path: '', component: NgxsLoginFeatureContainer }]),
    ],
})
export class NgxsLoginFeatureModule {}

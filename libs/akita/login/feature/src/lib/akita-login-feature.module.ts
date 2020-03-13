import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedLoginUiModule } from '@nx-guide/shared/login/ui';
import { AkitaLoginInputDataFeatureContainer } from './akita-login-feature-input-data.container';
import { AkitaLoginFeatureContainer } from './akita-login-feature.container';

@NgModule({
    declarations: [AkitaLoginFeatureContainer, AkitaLoginInputDataFeatureContainer],
    imports: [
        CommonModule,
        SharedLoginUiModule,
        RouterModule.forChild([
            {
                path: '',
                component: AkitaLoginFeatureContainer,
                children: [{ path: '', component: AkitaLoginInputDataFeatureContainer }],
            },
        ]),
    ],
})
export class AkitaLoginFeatureModule {}

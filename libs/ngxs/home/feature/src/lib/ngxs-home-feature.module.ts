import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsHomeUiModule } from '@nx-guide/ngxs/home/ui';
import { NgxsHomeFeatureComponent } from './ngxs-home-feature.container';

@NgModule({
    declarations: [NgxsHomeFeatureComponent],
    imports: [
        CommonModule,
        NgxsHomeUiModule,
        RouterModule.forChild([
            {
                path: '',
                component: NgxsHomeFeatureComponent,
                // canActivate: [AuthGuard]
            },
        ]),
    ],
})
export class NgxsHomeFeatureModule {}

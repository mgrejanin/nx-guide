import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'login',
                },
                {
                    path: 'login',
                    loadChildren: () =>
                        import('@nx-guide/akita/login/feature').then(module => module.AkitaLoginFeatureModule),
                },
                {
                    path: 'home',
                    loadChildren: () =>
                        import('@nx-guide/akita/home/feature').then(module => module.AkitaHomeFeatureModule),
                },
            ],
            { initialNavigation: 'enabled' },
        ),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/login' },
        {
          path: 'login',
          loadChildren: () =>
            import('@nx-guide/ngxs/login/feature').then(
              module => module.NgxsLoginFeatureModule
            )
        },
        {
          path: 'home',
          loadChildren: () =>
            import('@nx-guide/ngxs/home/feature').then(
              module => module.NgxsHomeFeatureModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    NgxsModule.forRoot([], {
      developmentMode: false
    }),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage,
      key: ['login']
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: false,
      collapsed: false
    }),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

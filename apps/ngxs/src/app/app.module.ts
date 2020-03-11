import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/login' },
        {
          path: 'login',
          loadChildren: () =>
            import('@nx-guide/ngxs/login/feature').then(
              module => module.NgxsLoginFeatureModule
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

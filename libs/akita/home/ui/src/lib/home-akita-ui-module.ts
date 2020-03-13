import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AkitaHomeComponent } from './home/home.component';

@NgModule({
    declarations: [AkitaHomeComponent],
    imports: [CommonModule],
    exports: [AkitaHomeComponent],
})
export class AkitaHomeUiModule {}

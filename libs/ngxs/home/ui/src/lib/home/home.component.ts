import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'nx-guide-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
    @Input() username: string;
    @Output() logout = new EventEmitter();
}

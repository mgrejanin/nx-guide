import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-akita-home-ui',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AkitaHomeComponent {
  @Input() username: string;
  @Output() logout = new EventEmitter();
}

import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../../utils/fade-animation';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: [fadeAnimation]
})
export class ContainerComponent {
  // @HostBinding('attr.@fadeAnimation') fadeAnimation;
}

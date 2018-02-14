import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../../utils/fade-animation';
import { of } from 'rxjs/observable/of';
import { RouterOutlet, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: [fadeAnimation]
})
export class ContainerComponent {
  // @HostBinding('attr.@fadeAnimation') fadeAnimation;
}

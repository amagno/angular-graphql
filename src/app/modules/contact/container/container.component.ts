import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from '../loading.service';
import { fadeAnimation } from '../../../utils/fade-animation';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: [fadeAnimation]
})
export class ContainerComponent implements OnInit {
  loading: boolean;
  constructor(private loadingService: LoadingService) { }
  ngOnInit() {
    this.loadingService.getLoading().subscribe(loading => {
      console.log('CHANGE LOADING: ', loading);
      this.loading = loading;
    });
    this.loadingService.show(1000);
  }

}

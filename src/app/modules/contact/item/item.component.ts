import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('contact') contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}

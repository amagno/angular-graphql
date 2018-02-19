import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: [Contact] = [] as [Contact];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.all().subscribe(({ data }) => {
      this.contacts = data.contacts;
    });
  }

}

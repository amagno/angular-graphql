import { Component, OnInit, Input } from '@angular/core';
import { Contact, ContactService } from '../contact.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('contact') contact: Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
  toggleFavorite() {
    this.contactService.setIsFavorite(this.contact.id, !this.contact.isFavorite).subscribe(undefined);
  }
  togglePublic() {
    this.contactService.setIsPublic(this.contact.id, !this.contact.isPublic).subscribe(undefined);
  }
}

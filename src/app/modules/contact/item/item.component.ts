import { Component, OnInit, Input } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import * as store from 'store2';
import { LoadingService } from '../loading.service';
import { Router } from '@angular/router';

interface ExpandState {
  open: boolean;
  id: string | number;
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('contact') contact: Contact;
  expandState: boolean;
  constructor(
    private contactService: ContactService,
    private loading: LoadingService,
    private router: Router
  ) { }
  private setExpandState(value: boolean) {
    this.expandState = value;
    store.set(`list-item-expand-state-${this.contact.id}`, value);
  }
  private getExpandState(): boolean {
    return store.get(`list-item-expand-state-${this.contact.id}`);
  }
  ngOnInit() {
    this.expandState = this.getExpandState() || false;
  }
  async handleDelete(id: string | number) {
    this.contactService.delete(id).subscribe(undefined, error => console.log(error));
    this.loading.show(1000);
    await this.router.navigate(['/', 'contacts']);
  }
  async handleEdit(id: string | number) {
    await this.router.navigate(['/', 'contacts', 'edit', id]);
  }
  toggleFavorite() {
    this.contactService.setIsFavorite(this.contact.id, !this.contact.isFavorite).subscribe(undefined);
  }
  togglePublic() {
    this.contactService.setIsPublic(this.contact.id, !this.contact.isPublic).subscribe(undefined);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit, OnDestroy {
  newForm: FormGroup;
  edit = {
    active: false,
    id: undefined
  };
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    this.buildNewContactForm();
    this.route.params.subscribe(({ id }) => {
      console.log('params');
      if (id) {
        this.contactService.contactById(id).subscribe(({ data }) => {
          Object.keys(data.contact).forEach((key) => {
            if (key !== '__typename' && key !== 'id') {
              console.log(key);
              this.newForm.get(key).setValue(data.contact[key]);
            }
          });
        });
        this.edit.active = true;
        this.edit.id = id;
      }
    });
  }
  ngOnDestroy() {
    this.newForm.reset();
  }
  buildNewContactForm() {
    this.newForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      isFavorite: [false],
      isPublic: [false],
      phone: ['', [Validators.minLength(8), Validators.maxLength(15)]],
      company: ['', [Validators.minLength(4)]],
      address: ['', [Validators.minLength(5), Validators.maxLength(100)]]
    });
  }
  handleSubmit() {
    if (this.edit.active) {
      console.log(this.newForm.value);
      this.contactService.edit(this.edit.id, this.newForm.value).subscribe(response => {
        console.log('EDITTT', response);
      });
    } else {
      this.contactService.add(this.newForm.value).subscribe(response => {
        console.log(response);
      }, error => {
        this.newForm.get('email').setErrors({ unique: true });
      });
    }
    this.loading.show(1000);
  }

}

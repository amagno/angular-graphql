import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { makePasswordValidator } from '../../../utils/custom-validators';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

const registerMutation = gql`
  mutation registerMutation($username: String!, $password: String!) {
    addUser(input: {
      username: $username,
      password: $password
    }) {
      key
    }
  }
`;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.buildRegisterForm();
  }
  buildRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    }, {
      validator: makePasswordValidator('password', 'confirmPassword')
    });
  }
  handleSubmit() {
    console.log(this.registerForm.value);
    const { username, password } = this.registerForm.value;
    this.apollo.mutate({
      mutation: registerMutation,
      variables: {
        username,
        password
      }
    }).subscribe(({ data }) => {
      console.log(data);
    }, error => console.error(error));
  }

}

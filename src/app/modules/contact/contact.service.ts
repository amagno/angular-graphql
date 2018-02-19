import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular/Apollo';
import { addContactMutation, contactsQuery, contactQuery, editContactMutation } from '../../graphql/contact.graphql';
import { User } from '../user/user.service';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs/Observable';

export interface Contact {
  id?: number | string;
  name?: string;
  email?: string;
  isFavorite?: boolean;
  isPublic?: boolean;
  phone?: string;
  company?: string;
  address?: string;
  user?: User;
}
@Injectable()
export class ContactService {

  constructor(private apollo: Apollo) { }

  add(input: Contact): Observable<any>  {
    console.log('ADD: ', input);
    return this.apollo.mutate({
      mutation: addContactMutation,
      variables: input,
      refetchQueries: [
        { query: contactsQuery }
      ]
    });
  }
  all(): Observable<any> {
    return this.apollo.watchQuery({
      query: contactsQuery
    }).valueChanges;
  }
  edit(id: string | number, input: Contact): Observable<any> {
    return this.apollo.mutate({
      mutation: editContactMutation,
      variables: {
        id,
        ...input
      },
      refetchQueries: [
        { query: contactsQuery }
      ]
    });
  }
  contactById(id: string | number): Observable<any> {
    return this.apollo.query({
      query: contactQuery,
      variables: {
        id
      }
    });
  }
}

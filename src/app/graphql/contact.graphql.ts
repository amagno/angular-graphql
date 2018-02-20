import gql from 'graphql-tag';

export const contactFragment = gql`
  fragment Contact_contact on Contact {
    name
    email
    isFavorite
    isPublic
    phone
    company
    address
  }
`;
export const addContactMutation = gql`
  mutation addContactMutation($input: ContactInput) {
    addContact(input: $input) {
      id
    }
  }
`;
export const editContactMutation = gql`
  mutation editContactMutation($id: ID!, $input: ContactInput) {
    editContact(id: $id, input: $input) {
      id
    }
  }
`;
export const contactsQuery = gql`
  query contactsQuery {
    contacts {
      id
      ...Contact_contact
    }
  }
  ${contactFragment}
`;
export const contactQuery = gql`
  query contactQuery($id: ID!) {
    contact(id: $id) {
      id
      ...Contact_contact
    }
  }
  ${contactFragment}
`;

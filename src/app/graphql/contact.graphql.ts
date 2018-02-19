import gql from 'graphql-tag';
export const addContactMutation = gql`
  mutation addContactMutation(
    $name: String!
    $email: String!
    $isFavorite: Boolean
    $isPublic: Boolean
    $phone: String
    $company: String
    $address: String
  ) {
    addContact(input: {
      name: $name
      email: $email
      isFavorite: $isFavorite
      isPublic: $isPublic
      phone: $phone
      company: $company
      address: $address
    }) {
      id
    }
  }
`;
export const editContactMutation = gql`
  mutation editContactMutation(
    $id: ID!
    $name: String
    $email: String
    $isFavorite: Boolean
    $isPublic: Boolean
    $phone: String
    $company: String
    $address: String
  ) {
    editContact(id: $id, input: {
      name: $name
      email: $email
      isFavorite: $isFavorite
      isPublic: $isPublic
      phone: $phone
      company: $company
      address: $address
    }) {
      id
    }
  }
`;
export const contactsQuery = gql`
  query contactsQuery {
    contacts {
      id
      name
      email
      isFavorite
      isPublic
      phone
      company
      address
    }
  }
`;
export const contactQuery = gql`
  query contactQuery($id: ID!) {
    contact(id: $id) {
      id
      name
      email
      isFavorite
      isPublic
      phone
      company
      address
    }
  }
`;
export const deleteContactMutation = gql`
  mutation deleteContactMutation($id: ID!) {
    deleteContact(id: $id) {
      id
    }
  }
`;

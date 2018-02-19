import gql from 'graphql-tag';


export const loginMutation = gql`
  mutation loginMutation($username: String!, $password: String!) {
    login(input: {
      username: $username
      password: $password
    }) {
      key
      user {
        username
      }
    }
  }
`;
export const registerMutation = gql`
  mutation registerMutation($username: String!, $password: String!) {
    addUser(input: {
      username: $username
      password: $password
    }) {
      key
      user {
        username
      }
    }
  }
`;

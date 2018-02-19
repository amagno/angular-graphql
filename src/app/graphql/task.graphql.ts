import gql from 'graphql-tag';


export const taskQuery = gql`
  query taskQuery($id: ID!) {
    task(id: $id) {
      id
      name
      checked
      createdAt
    }
  }
`;
export const tasksQuery = gql`
  query tasksQuery {
    tasks {
      id
      name
      checked
      createdAt
    }
  }
`;
export const addTaskMutation = gql`
  mutation addTaskMutation($name: String!) {
    addTask(input: {
      name: $name
    }) {
      id
      name
      checked
    }
  }
`;
export const deleteTaskMutation = gql`
  mutation deleteTaskMutation($id: ID!) {
    deleteTask(id: $id) {
      id,
      name
    }
  }
`;
export const editTaskMutation = gql`
  mutation editTaskMutation($id: ID!, $name: String, $checked: Boolean) {
    editTask(id: $id, input: {
      name: $name
      checked: $checked
    }) {
      id,
      name
    }
  }
`;

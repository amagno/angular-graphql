import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular/Apollo';
import gql from 'graphql-tag';
import { FetchType, ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user.service';
export interface Task {
  id?: string;
  name?: string;
  user?: User;
  checked?: boolean;
  createAt?: Date;
}

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
@Injectable()
export class TaskService {

  constructor(private apollo: Apollo) { }
  getTask(id: string | number) {
    return this.apollo.query<{ task: Task }>({
      query: taskQuery,
      variables: {
        id
      },
    });
  }
  getList(): Observable<ApolloQueryResult<{ tasks: [Task] }>> {
    return this.apollo.watchQuery<{ tasks: [Task] }>({
      query: tasksQuery,
      fetchPolicy: 'network-only'
    }).valueChanges;
  }
  add(taskName: string): Observable<ApolloQueryResult<{ addTask: Task }>> {
    return this.apollo.mutate<{ addTask: Task }>({
      mutation: addTaskMutation,
      variables: {
        name: taskName
      },
      refetchQueries: [{
        query: tasksQuery
      }]
    });
  }
  delete(id: number | string): Observable<ApolloQueryResult<{ deleteTask: Task }>> {
    return this.apollo.mutate<{ deleteTas: Task }>({
      mutation: deleteTaskMutation,
      variables: {
        id
      },
      refetchQueries: [
        {
          query: tasksQuery
        }
      ]
    });
  }
  edit(id, task: { name?: string, checked?: boolean }): Observable<ApolloQueryResult<{ editTask: Task }>> {
    return this.apollo.mutate<{ editTask: Task }>({
      mutation: editTaskMutation,
      variables: {
        id,
        ...task
      },
      refetchQueries: [
        {
          query: tasksQuery
        }
      ]
    });
  }
}

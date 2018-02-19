import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular/Apollo';
import { FetchType, ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user.service';
import {
  addTaskMutation,
  editTaskMutation,
  deleteTaskMutation,
  taskQuery,
  tasksQuery
} from '../../graphql/task.graphql';
import 'rxjs/add/operator/switchMap';

export interface Task {
  id?: string;
  name?: string;
  user?: User;
  checked?: boolean;
  createAt?: Date;
}
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

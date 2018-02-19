import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Task, TaskService } from '../task.service';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns = ['createdAt', 'name', 'checked', 'options'];
  taskList: [Task];
  animationState: string;
  animationId: string | number;
  animationClass: string;
  constructor(
    private taskService: TaskService,
    private router: Router,
  ) { }
  private getRouterEditId(url: string) {
    return url.split('/')[3] || undefined;
  }
  ngOnInit() {
    this.taskService.getList().subscribe(response => {
      this.taskList = response.data.tasks;
    }, error => console.log(error));
  }
  handleDelete(id) {
    this.taskService.delete(id).subscribe(undefined, error => {
      console.log(error);
    });
  }
  handleChecked(id, checked) {
    this.taskService.edit(id, { checked }).subscribe(undefined, error => {
      console.log(error);
    });
  }
  handleEdit(event, id) {
    this.router.navigate(['/tasks/edit', id]);
  }
}


import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Task, TaskService } from '../task.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns = ['createdAt', 'name', 'checked', 'options'];
  taskList: [Task];
  constructor(private taskService: TaskService) { }

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
}

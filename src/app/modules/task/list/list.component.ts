import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Task, TaskService } from '../task.service';
import { fadeAnimation, fadeStateAnimation } from '../../../utils/fade-animation';
import { TaskAnimationService } from '../task-animation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [fadeStateAnimation]
})
export class ListComponent implements OnInit {
  displayedColumns = ['createdAt', 'name', 'checked', 'options'];
  taskList: [Task];
  animationState: string;
  constructor(
    private taskService: TaskService,
    private taskAnimation: TaskAnimationService
  ) { }

  ngOnInit() {
    this.taskAnimation.getAnimationState().subscribe(animationState => {
      this.animationState = animationState;
    });
    this.taskService.getList().subscribe(response => {
      console.log(response);
      this.taskList = response.data.tasks;
    }, error => console.log(error));
  }
  handleDelete(id) {
    this.taskService.delete(id).subscribe(() => {
      this.taskAnimation.setAnimationState('out');
    }, error => {
      console.log(error);
    });
  }
  handleChecked(id, checked) {
    this.taskAnimation.setAnimationState('none');
    this.taskService.edit(id, { checked }).subscribe(undefined, error => {
      console.log(error);
    });
  }
}

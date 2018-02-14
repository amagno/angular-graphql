import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Task, TaskService } from '../task.service';
import { fadeAnimation, fadeStateAnimation } from '../../../utils/fade-animation';
import { TaskAnimationService } from '../task-animation.service';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';

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
  animationId: string | number;
  animationClass: string;
  constructor(
    private taskService: TaskService,
    private taskAnimation: TaskAnimationService,
    private router: Router,
  ) { }
  private getRouterEditId(url: string) {
    return url.split('/')[3] || undefined;
  }
  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   console.log('SET ID ----> ', params);
    //   this.editId = params.id;
    // this.taskAnimation.setNone();
    this.router.events.subscribe(() => {
      this.taskAnimation.setNone();
    });
    this.taskService.getList().subscribe(response => {
      console.log(response);
      this.taskList = response.data.tasks;
    }, error => console.log(error));

    this.taskAnimation.getAnimationState().subscribe(animationState => {
      console.log(animationState);
      this.animationClass = animationState.className;
      this.animationId = animationState.id;
    });

    const id = this.getRouterEditId(this.router.url);
    if (id) {
      this.taskAnimation.setAnimationState({ className: 'edit', id });
    }
  }
  handleDelete(id) {
    this.taskAnimation.setAnimationState({ className: 'out', id });
    this.taskService.delete(id).subscribe(undefined, error => {
      console.log(error);
    });
  }
  handleChecked(id, checked) {
    this.taskAnimation.setAnimationState({ className: 'none', id });
    this.taskService.edit(id, { checked }).subscribe(undefined, error => {
      console.log(error);
    });
  }
  handleEdit(event, id) {
    this.taskAnimation.setAnimationState({ className: 'edit', id });
    this.router.navigate(['/tasks/edit', id]);
  }
}


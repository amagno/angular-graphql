import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { fadeAnimation } from '../../../utils/fade-animation';
import { ListComponent } from '../list/list.component';
import { TaskAnimationService } from '../task-animation.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  animations: [fadeAnimation]
})
export class NewComponent implements OnInit {
  newTaskForm: FormGroup;
  constructor(
    private builder: FormBuilder,
    private taskService: TaskService,
    private taskAnimationService: TaskAnimationService
  ) { }

  ngOnInit(
  ) {
    this.newTaskForm = this.builder.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  handleSubmit() {
    this.taskAnimationService.setAnimationState('in');
    const { taskName } = this.newTaskForm.value;
    this.taskService.add(taskName).subscribe(undefined, error => {
      console.log(error);
    });
  }
}

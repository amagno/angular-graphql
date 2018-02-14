import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newTaskForm: FormGroup;
  constructor(private builder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(
  ) {
    this.newTaskForm = this.builder.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  handleSubmit() {
    const { taskName } = this.newTaskForm.value;
    this.taskService.add(taskName).subscribe(undefined, error => {
      console.log(error);
    });
  }
}

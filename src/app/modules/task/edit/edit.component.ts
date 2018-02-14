import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editTaskForm: FormGroup;
  private id: string | number;
  constructor(
    private builder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  private getTask() {
    const taskId = this.route.snapshot.params.id;
    this.taskService.getTask(taskId).subscribe(response => {
      this.id = response.data.task.id;
      this.editTaskForm.get('name').setValue(response.data.task.name);
      this.editTaskForm.get('checked').setValue(response.data.task.checked);
    }, async error => {
      await this.router.navigate(['/tasks']);
    });
  }
  ngOnInit() {
    this.editTaskForm = this.builder.group({
      name: ['', [Validators.required]],
      checked: [false]
    });
    this.getTask();
  }
  handleSubmit() {
    console.log('EDITING', this.editTaskForm.value);
    this.taskService.edit(this.id, this.editTaskForm.value).subscribe(undefined, error => {
      console.log(error);
    });
  }

}

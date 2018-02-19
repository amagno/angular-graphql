import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  // @HostBinding('attr.@fadeAnimation') fadeAnimation;

  editTaskForm: FormGroup;
  private id: string | number;
  constructor(
    private builder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }
  private getTask() {
    this.route.params.switchMap<any, any>(({ id }) => this.taskService.getTask(id)).subscribe(response => {
      this.id = response.data.task.id;
      this.editTaskForm.get('name').setValue(response.data.task.name);
      this.editTaskForm.get('checked').setValue(response.data.task.checked);
    }, error => {
      console.log(error);
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
    this.taskService.edit(this.id, this.editTaskForm.value).subscribe(undefined, error => {
      console.log(error);
    });
  }

}

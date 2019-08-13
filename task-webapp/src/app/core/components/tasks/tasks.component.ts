import { TaskModel } from './../../../shared/models/task.models';

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TaskComponent implements OnInit {

  allTasks: TaskModel[];

  constructor(private taskService: TaskService) {
    this.allTasks = [];
  }


  ngOnInit() {
    this.onLoadComponent();
  }

  onLoadComponent() {
    this.taskService.get().subscribe(response => {
      this.allTasks = response.message;
    });
  }
  createTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.taskService.create(form.value).subscribe(response => {
      this.allTasks.push(response.message);
    });
  }

}

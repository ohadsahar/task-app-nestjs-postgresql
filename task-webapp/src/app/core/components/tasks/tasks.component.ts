import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { TaskModel } from './../../../shared/models/task.models';

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
  onLoadComponent(): void {
    this.getAllTasks();
  }
  getAllTasks(): void {
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
  deleteTask(id: string): void {
    this.taskService.delete(id).subscribe(response => {
      this.allTasks = this.allTasks.filter(task => task.id !== response.message);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { TaskModel } from './../../../shared/models/task.models';
import * as fromRoot from '../../../app.reducer';
import * as taskActions from '../../../core/store/actions/task.actions';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TaskComponent implements OnInit {
  public ngbSubscribe$: Subject<void> = new Subject<void>();
  allTasks: TaskModel[];
  editoption: any;
  editEnable: boolean;

  constructor(private taskService: TaskService, private store: Store<fromRoot.State>) {
    this.allTasks = [];
    this.editoption = {};
  }

  ngOnInit() {
    this.onLoadComponent();
  }
  onLoadComponent(): void {
    this.getAllTasks();
  }
  getAllTasks(): void {
    this.store.dispatch(new taskActions.GetAllTasks());
    const dataToSubscribe = this.store.select(fromRoot.getTasksReducerData).pipe(takeUntil(this.ngbSubscribe$))
      .subscribe((data) => {
        if (!data.loading) {
          this.allTasks = data.data;
          dataToSubscribe.unsubscribe();
        }
      });
  }
  createTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.store.dispatch(new taskActions.CreateTask(form.value));
    const dataToSubscribe = this.store.select(fromRoot.getTasksReducerData).pipe(takeUntil(this.ngbSubscribe$))
      .subscribe((data) => {
        if (!data.loading) {
          this.allTasks.push(data.data);
          dataToSubscribe.unsubscribe();
        }
      });
  }
  updateTask(form: NgForm, item: TaskModel) {
    if (form.invalid) {
      return;
    }
    form.value.id = item.id;
    this.taskService.update(form.value).subscribe(response => {
      const index = this.allTasks.findIndex(task => task.id === response.message.id);
      if (index >= 0) {
        this.allTasks[index] = response.message;
      }
    });
  }
  deleteTask(id: string): void {
    this.taskService.delete(id).subscribe(response => {
      this.allTasks = this.allTasks.filter(task => task.id !== response.message);
    });
  }
}

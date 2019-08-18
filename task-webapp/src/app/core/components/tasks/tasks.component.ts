import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromRoot from '../../../app.reducer';
import * as taskActions from '../../../core/store/actions/task.actions';
import { TaskModel } from './../../../shared/models/task.models';

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

  constructor(private store: Store<fromRoot.State>) {
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
          console.log(data);
          this.allTasks.push(data.data);
          dataToSubscribe.unsubscribe();
          form.reset();
        }
      });
  }
  updateTask(form: NgForm, item: TaskModel) {
    if (form.invalid) {
      return;
    }
    form.value.id = item.id;
    this.store.dispatch(new taskActions.UpdateTasks(form.value));
    const dataToSubscribe = this.store.select(fromRoot.getTasksReducerData).pipe(takeUntil(this.ngbSubscribe$))
      .subscribe((data) => {
        if (!data.loading) {
          const index = this.allTasks.findIndex(task => task.id === data.data.id);
          if (index >= 0) {
            this.allTasks[index] = data.data;
          }
          dataToSubscribe.unsubscribe();
          form.reset();
        }
      });
  }
  deleteTask(id: string): void {
    this.store.dispatch(new taskActions.DeleteTasks(id));
    const dataToSubscribe = this.store.select(fromRoot.getTasksReducerData).pipe(takeUntil(this.ngbSubscribe$))
      .subscribe((data) => {
        if (!data.loading) {
          this.allTasks = this.allTasks.filter(task => task.id !== data.data);
          dataToSubscribe.unsubscribe();
        }
      });
  }
}


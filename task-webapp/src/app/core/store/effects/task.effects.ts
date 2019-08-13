import { TaskService } from './../../services/task.service';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as taskActions from '../actions/task.actions';
import { catchError, map, exhaustMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskEffect {

  constructor(private actions$: Actions, private taskService: TaskService) { }
  @Effect()
  public getAllTask$ = this.actions$.pipe(ofType(taskActions.GET_ALL_TASKS))
    .pipe(switchMap(() =>
      this.taskService.get().pipe(map((tasks) => {
        return new taskActions.GetAllTasksSuccess(tasks.message);
      }),
        catchError((error) => {
          return of(new taskActions.GetAllTasksFailed(error));
        }),
      ),
    ),
    );

  @Effect()
  public createTask$ = this.actions$.pipe(ofType(taskActions.CREATE_TASKS))
    .pipe(exhaustMap((action: taskActions.CreateTask) =>
      this.taskService.create(action.payload).pipe(map((data) => {
        if (data.message) {
          return new taskActions.CreateTaskSuccess(data.message);
        }
      }),
        catchError((error) => {
          return of(new taskActions.CreateTaskFailed(error));
        }),
      ),
    ),
    );
    }

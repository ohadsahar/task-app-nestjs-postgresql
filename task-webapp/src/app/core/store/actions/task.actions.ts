import { Action } from '@ngrx/store';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const GET_ALL_TASKS_SUCCESS = 'GET_ALL_TASKS_SUCCESS';
export const GET_ALL_TASKS_FAILED = 'GET_ALL_TASKS_FAILED';
export const CREATE_TASKS = 'CREATE_TASK';
export const CREATE_TASKS_SUCCESS = 'CREATE_TASKS_SUCCESS';
export const CREATE_TASKS_FAILED = 'CREATE_TASKS_FAILED';

export class GetAllTasks implements Action {
  readonly type = GET_ALL_TASKS;
  constructor() { }
}
export class GetAllTasksSuccess implements Action {
  readonly type = GET_ALL_TASKS_SUCCESS;
  constructor(public payload: any) { }
}
export class GetAllTasksFailed implements Action {
  readonly type = GET_ALL_TASKS_FAILED;
  constructor(public payload: any) { }
}
export class CreateTask implements Action {
  readonly type = CREATE_TASKS;
  constructor(public payload: any) { }
}
export class CreateTaskSuccess implements Action {
  readonly type = CREATE_TASKS_SUCCESS;
  constructor(public payload: any) { }
}
export class CreateTaskFailed implements Action {
  readonly type = CREATE_TASKS_FAILED;
  constructor(public payload: any) { }
}

export type Actions = GetAllTasks | GetAllTasksSuccess | GetAllTasksFailed | CreateTask | CreateTaskSuccess | CreateTaskFailed;

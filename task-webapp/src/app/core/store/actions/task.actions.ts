import { Action, UPDATE } from '@ngrx/store';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const GET_ALL_TASKS_SUCCESS = 'GET_ALL_TASKS_SUCCESS';
export const GET_ALL_TASKS_FAILED = 'GET_ALL_TASKS_FAILED';
export const CREATE_TASKS = 'CREATE_TASK';
export const CREATE_TASKS_SUCCESS = 'CREATE_TASKS_SUCCESS';
export const CREATE_TASKS_FAILED = 'CREATE_TASKS_FAILED';
export const DELETE_TASKS = 'DELETE_TASK';
export const DELETE_TASKS_SUCCESS = 'DELETE_TASKS_SUCCESS';
export const DELETE_TASKS_FAILED = 'DELETE_TASKS_FAILED';
export const UPDATE_TASKS = 'UPDATE_TASKS';
export const UPDATE_TASKS_SUCCESS = 'UPDATE_TASKS_SUCCESS';
export const UPDATE_TASKS_FAILED = 'UPDATE_TASKS_FAILED';
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
export class DeleteTasks implements Action {
  readonly type = DELETE_TASKS;
  constructor(public payload: any) { }
}
export class DeleteTasksSuccess implements Action {
  readonly type = DELETE_TASKS_SUCCESS;
  constructor(public payload: any) { }
}
export class DeleteTasksFailed implements Action {
  readonly type = DELETE_TASKS_FAILED;
  constructor(public payload: any) { }
}

export class UpdateTasks implements Action {
  readonly type = UPDATE_TASKS;
  constructor(public payload: any) { }
}
export class UpdateTasksSuccess implements Action {
  readonly type = UPDATE_TASKS_SUCCESS;
  constructor(public payload: any) { }
}
export class UpdateTasksFailed implements Action {
  readonly type = UPDATE_TASKS_FAILED;
  constructor(public payload: any) { }
}

export type Actions = GetAllTasks | GetAllTasksSuccess | GetAllTasksFailed | CreateTask | CreateTaskSuccess | CreateTaskFailed
  | DeleteTasks | DeleteTasksSuccess | DeleteTasksFailed | UpdateTasks | UpdateTasksSuccess | UpdateTasksFailed;

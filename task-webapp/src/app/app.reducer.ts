import * as taskReducer from './core/store/reducers/task.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  taskReducer: taskReducer.State;
}

export const Reducers: ActionReducerMap<State> = {
  taskReducer: taskReducer.taskReducer
};

export const getTasksReducer = createFeatureSelector<taskReducer.State>('taskReducer');
export const getTasksReducerData = createSelector(getTasksReducer, taskReducer.taskReducerData);

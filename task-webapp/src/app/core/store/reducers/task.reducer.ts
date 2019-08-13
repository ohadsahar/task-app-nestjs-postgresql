import * as taskActions from '../actions/task.actions';


export interface State {
  loading: boolean;
  data: any;
}

export const initialState: State = {
  loading: true,
  data: []
};

export function taskReducer(state = initialState, action: taskActions.Actions) {
  switch (action.type) {
    case taskActions.GET_ALL_TASKS:
      return {
        ...state,
        loading: true,
      };
    case taskActions.GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.GET_ALL_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.CREATE_TASKS:
      return {
        ...state,
        loading: true,
        data: action.payload
      };
    case taskActions.CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.CREATE_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.DELETE_TASKS:
      return {
        ...state,
        loading: true,
        data: action.payload
      };
    case taskActions.DELETE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.DELETE_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.UPDATE_TASKS:
      return {
        ...state,
        loading: true,
        data: action.payload
      };
    case taskActions.UPDATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case taskActions.UPDATE_TASKS_FAILED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
export const taskReducerData = (state: State) => state;

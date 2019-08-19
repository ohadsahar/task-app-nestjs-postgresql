import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { TaskModel } from './../../shared/models/task.models';

const backendUrlTask = environment.backendUrlTask;

@Injectable({ providedIn: 'root' })
export class TaskService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<{ message: TaskModel[] }>(backendUrlTask);
  }
  create(taskData: TaskModel) {
    return this.http.post<{ message: TaskModel}>(backendUrlTask, taskData);
  }
  update(taskData: TaskModel) {
    return this.http.put<{message: TaskModel}>(backendUrlTask, taskData);
  }
  delete(id: string) {
    return this.http.delete<{message: string}>(`${backendUrlTask}/${id}`);
  }
}

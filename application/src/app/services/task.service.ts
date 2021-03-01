import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import the ts file
import { Task } from './../types/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://localhost:3000/tasks';

  // inject the HttpClient class in the service
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  //  Create a method to query the endpoint
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  /** POST: add a new task to the database */
  // need objekt
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, this.httpOptions);
  }

  /** PUT: update the task on the server */
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; //for updating we need task.id
    return this.http.put<Task>(url, task, this.httpOptions);
  }

  /** DELETE: delete the task from the server */
  deleteTask(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`; // DELETE api/tasks/2
    return this.http.delete(url, this.httpOptions);
  }
}

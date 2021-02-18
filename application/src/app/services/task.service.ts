import { catchError } from 'rxjs/operators';
import { Task } from './../types/task';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  //   Create a method to query the endpoint
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }

  /** POST: add a new task to the database */
  createTask(title: string): Observable<Task> {
    return this.http.post<Task>(
      this.apiUrl,
      JSON.stringify(title),
      this.httpOptions
    );
    // .pipe(
    //   catchError(this.handleError('createTask', title))
    // );
  }

  /** DELETE: delete the task from the server */
  deleteTask(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`; // DELETE api/tasks/2
    return this.http.delete(url, this.httpOptions);
    // .pipe(
    //   catchError(this.handleError('deleteHero'))
    // );
  }
}

// createTask(title: string) {
//   return this.http.post('tasks', { title });
// }
// getTask(title:string): Observable<Task> {
//     return this.http.post<Task>(`${this.API_URL}/tasks/`);

//   }

// Create a new item
// createTask(title: string): Observable<Task> {
//   return this.http.post<Task>(
//     this.API_URL,
//     JSON.stringify(title),
//     this.httpOptions
//   );
// }

// post(uri: string, payload: Object) {
//   return this.http.post(`${this.API_URL}/${uri}`, payload);
// }

// Delete message by id
// deleteItem(id: any) {
//   return this.http.delete<Task>(this.API_URL + '/' + id, this.httpOptions);
// }e

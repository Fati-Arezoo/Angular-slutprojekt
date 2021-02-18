import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from './../../services/task.service';
import { Task } from './../../types/task';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.scss'],
})
export class TaskmanagerComponent implements OnInit {
  tasks: Task[] = [];
  page: number = 1;
  newTask!: string;
  // inject the API service, and call the getTasks()
  constructor(private taskService: TaskService, public router: Router) {}

  ngOnInit(): void {
    // we get all information/method from postService
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // post a new task
  createTask() {
    this.taskService
      .createTask(this.newTask)
      .subscribe((title) => this.tasks.push(title));
    console.log('title');
  }

  // delet a task
  onDeletTask(id: number) {
    this.taskService.deleteTask(id).subscribe();
  }

  // method for go to page two and create a new task
  backPageTwo() {
    this.page = 2;
  }

  // back to task
  cancelBtn() {
    this.page = 1;
  }
}

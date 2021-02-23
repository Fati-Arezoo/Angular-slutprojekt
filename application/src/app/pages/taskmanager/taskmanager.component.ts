import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TaskService } from './../../services/task.service';
import { Task } from './../../types/task';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.scss'],
})
export class TaskmanagerComponent implements OnInit {
  // propety of component
  tasks: Task[] = [];
  page: number = 1;
  // create a objekt(newTask) type of Task
  newTask: Task = {
    id: 0,
    title: '',
    content: '',
  };

  // inject the API service, and call the getTasks()
  constructor(private taskService: TaskService, public router: Router) {}

  ngOnInit(): void {
    // we get all information/method from postService
    this.taskService.getTasks().subscribe((Task) => (this.tasks = Task));
  }

  // post a new task
  createTask() {
    this.taskService
      .createTask(this.newTask) // create newtask
      .subscribe((task) => this.tasks.push(task));
    // clear the input.value
    this.newTask.title = '';
    this.newTask.content = '';
    this.page = 1;
  }

  // Edit a task , we need id for att edit the task
  editTask(id: number) {
    // find the task
    let task = this.tasks.find((item) => {
      return item.id === id;
    });
    if (task == undefined) {
      return;
    }
    this.newTask = task;
    this.page = 2;
  }

  // uptade task
  updateTask() {
    this.taskService.updateTask(this.newTask).subscribe((task) => {
      this.tasks.forEach((item, index) => {
        if (item.id === task.id) {
          // put the update task in tasks array
          this.tasks[index] = task;
        }
      });
    });
    // clear the input.value
    this.newTask.title = '';
    this.newTask.content = '';
    this.page = 1;
  }

  // delet a task
  onDeletTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      // find the task that we want to delet
      this.tasks = this.tasks.filter((task) => {
        if (task.id !== id) {
          return true;
        }
        return false;
      });
    });
  }

  // check a task
  onCheckTask(e: any): void {
    if (e.target.classList.contains('fa-check')) {
      e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle(
        'done'
      );
    }

    console.log(
      e.target.parentElement.parentElemen.parentElement.parentElement
    );
  }

  // method for go to page two and create a new task
  backPageTwo() {
    this.page = 2;
    this.newTask.title = '';
    this.newTask.content = '';
    this.newTask.id = 0;
  }

  // back to task
  cancelBtn() {
    this.page = 1;
  }
}

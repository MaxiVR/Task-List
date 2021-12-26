import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import {TASK} from '../../mock-tasks';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = TASK; 

  constructor() { }

  ngOnInit(): void {
  }

}

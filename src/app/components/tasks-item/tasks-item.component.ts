import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../Task"
import  { TASK } from "../../mock-tasks"
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASK[0];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  vencida: boolean = false;
  showAddTask: boolean = false;
  subscription? : Subscription;
  myDate = new Date();
  myDay = new Date();

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.text.length === 0){
      alert('Please add task!')
      return
    }
    const {text, day, reminder, vencida} = this;
    const newTask = {text, day, reminder, vencida};
    this.onAddTask.emit(newTask);
  }

  dateChanged($event:any){
    console.log($event.value._d.toLocaleDateString());
    this.myDay = $event.value._d;
    this.day = $event.value._d.toLocaleDateString();
    this.myDate.setHours(0, 0, 0, 0); //Pone las hh, mm, ss en 0 para comparar solo el día con myDay
    if (this.myDay.getTime() < this.myDate.getTime()){
      this.vencida = true;
      console.log("Vencida");
    }else{
      this.vencida = false;
    }
    
  }
  
}

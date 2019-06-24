import { Component } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})

export class AppGroceryComponent {
  task: string;
  tasks = []; 

onClick(){
  	this.tasks.push({name: this.task, strike: false});
  	this.task = '';
  }
}



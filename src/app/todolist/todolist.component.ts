import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {

  taskArray=[{taskName: 'Brush teeth', isCompleted: false , isEditable :false }];
  constructor() {}

  ngOnInit(): void {
      
  }

  onsubmit(from : NgForm){

    console.log(from);
    this.taskArray.push({
      taskName:from.controls['task'].value,
      isCompleted:false ,
      isEditable:false
    })

    from.reset();
  }
  onDelete(index:number){

  console.log(index);

  this.taskArray.splice(index ,1);

  }

  onCheck(index:number){

    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index:number){

    this.taskArray[index].isEditable=true;

  }

  onSave(index:number ,newtask: string){

    this.taskArray[index].taskName=newtask;
    this.taskArray[index].isEditable=false;
    
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  todos : string[] = []

  addTodo(todo : string) : void {
    this.todos.push(todo)
  }

  removeTodo(index : number) : void {
    this.todos.splice(index, 1)
  }
  
}

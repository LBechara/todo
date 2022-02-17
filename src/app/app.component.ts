import { Component } from '@angular/core';
import { Todo } from 'src/model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: Todo[] = []

  constructor() {
    this.todoList.push(new Todo( 1, 'ir a feira', false))
    this.todoList.push(new Todo( 2, 'curar da covid', false))
    this.todoList.push(new Todo( 3, 'escovar os dentes', true))
  }
}

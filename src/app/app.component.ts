import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todoList: Todo[] = []
  form: FormGroup | any

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])]
    })
    this.todoList.push(new Todo( 1, 'ir a feira', false))
    this.todoList.push(new Todo( 2, 'curar da covid', false))
    this.todoList.push(new Todo( 3, 'escovar os dentes', true))
  }

  ngOnInit(): void {
  }

  alteraStatusTarefa(tarefa: Todo, feito: boolean): void {
    tarefa.finalizado = feito
  }

  excluiTarefa(tarefa: Todo) {
    const index = this.todoList.indexOf(tarefa)
    if(index != -1) {
      this.todoList.splice(index, 1)
    }
  }
}

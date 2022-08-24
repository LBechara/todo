import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todoList: Todo[] = []
  form: UntypedFormGroup | any

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])]
    })
  }

  ngOnInit(): void {
    this.getListLocalStorage()
  }

  adicionarTarefa() {
    const tarefa = this.form.value.title;
    const id = this.todoList.length + 1
    this.todoList.push(new Todo(id, tarefa, false))
    this.salvarTarefas()
    this.resetForm()
  }

  resetForm() {
    this.form.reset()
  }

  alteraStatusTarefa(tarefa: Todo, feito: boolean): void {
    tarefa.finalizado = feito
    this.salvarTarefas()
  }

  excluiTarefa(tarefa: Todo) {
    const index = this.todoList.indexOf(tarefa)
    if(index != -1) {
      this.todoList.splice(index, 1)
    }
    this.salvarTarefas()
  }

  salvarTarefas() {
    this.atualizarIds()
    const data = JSON.stringify(this.todoList)
    localStorage.setItem('todoList', data)
  }

  limparLocalStorage() {
    localStorage.clear()
    location.reload()
  }

  getListLocalStorage() {
    if(localStorage.getItem('todoList')) {
      const data = localStorage.getItem('todoList')
      this.todoList = JSON.parse(data || '{}')
    }
  }

  atualizarIds() {
    this.todoList.forEach((item, index) => {
      item.id=index + 1
    })
  }
}

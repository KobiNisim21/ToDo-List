import { Subscription } from 'rxjs';
import { TodoService } from './../../services/todo.service';
import { ITodo } from './../../models/todo.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  @Input() todos: Array<ITodo> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {

  }

  public onTodoClick(todo: ITodo, index: number): void {
    this.todoService.setSelectedTodo(todo);
    this.todos.forEach(todo => {
      if(todo.selected) {
        todo.selected = false; //change background color by click >> for each item.
      }
    })
    this.todos[index].selected = true;
  }

}


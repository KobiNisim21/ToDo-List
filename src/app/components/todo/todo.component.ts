import { Subscription } from 'rxjs';
import { ITodo } from './../../models/todo.interface';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  @Input() set todo(todo: ITodo) {
    this._todo = todo;
    console.log(todo)
  }
  get todo() {
    return this._todo;
  }

  private _todo: ITodo;

  constructor() {}

  ngOnInit(): void {}

  public onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }

  public onArchiveTodo(): void {
    this.todo.isArchived = true;
  }
}

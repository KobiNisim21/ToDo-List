import { Subscription } from 'rxjs';
import { ITodo } from './../../models/todo.interface';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo: ITodo;

  private subscription: Subscription = new Subscription()
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data => {
        this.todo = data
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

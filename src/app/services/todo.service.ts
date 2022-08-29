import { ITodo } from './../models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Array<ITodo>  = []

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos)

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0]: null)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    if(!this._todoSubject.value.length) {
      const todoString = localStorage.getItem("todos");
      if(todoString) {
        const existingTodos: Array<ITodo> = JSON.parse(todoString);
        existingTodos[0].selected = true;
        this._todoSubject.next(existingTodos)
        this._singleTodoSubject.next(existingTodos[0]);
      }
    }

    return this._todoSubject.asObservable()
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable()
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo)
  }

  public addNewTodo(newTodo: ITodo): void {
    //take exiting todos
    //add new todo to exiting todos
    //trigger next tic in observable
    console.log(newTodo)
    const exitistingTodos: Array<ITodo> = this._todoSubject.value;
    exitistingTodos.push(newTodo);
    this._todoSubject.next(exitistingTodos)
    localStorage.setItem("todos", JSON.stringify(exitistingTodos))
  }
}

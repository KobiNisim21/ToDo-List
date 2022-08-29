import { ITodo } from './../models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Pronghorn',
      description: 'Antilocapra americana',
      isCompleted: false,
      isArchived: false,
      endDate: '1/21/2022',
      selected: true,
    },
    {
      id: 2,
      title: 'Bahama pintail',
      description: 'Anas bahamensis',
      isCompleted: false,
      isArchived: false,
      endDate: '4/4/2022',
      selected: false,
    },
    {
      id: 3,
      title: 'Lion, south american sea',
      description: 'Otaria flavescens',
      isCompleted: false,
      isArchived: false,
      endDate: '5/18/2022',
      selected: false,
    },
    {
      id: 4,
      title: 'To learn React',
      description: 'Register to Haim Michael course',
      isCompleted: false,
      isArchived: false,
      endDate: '28/09/2022',
      selected: false,
    },
    {
      id: 5,
      title: 'To learn Node.js',
      description: 'Register to Haim Michael second course',
      isCompleted: false,
      isArchived: false,
      endDate: '28/09/2022',
      selected: false,
    },

  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0])

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable()
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable()
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo)
  }
}

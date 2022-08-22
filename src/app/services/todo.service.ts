import { ITodo } from './../models/todo.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public mock: ITodo[] = [
    {
      title: 'Pronghorn',
      description: 'Antilocapra americana',
      isCompleted: true,
      isArchived: true,
      endDate: '1/21/2022',
    },
    {
      title: 'Bahama pintail',
      description: 'Anas bahamensis',
      isCompleted: true,
      isArchived: false,
      endDate: '4/4/2022',
    },
    {
      title: 'Lion, south american sea',
      description: 'Otaria flavescens',
      isCompleted: false,
      isArchived: false,
      endDate: '5/18/2022',
    },

  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable()
  }
}

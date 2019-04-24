import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export abstract class TodoDataService {

  public lastId: number;
  public todos: Todo[];

  constructor() { }

  abstract addTodo(todo: Todo): TodoDataService;

  abstract addTodos(todos: Todo[]): TodoDataService;

  abstract deleteTodoById(id: number): TodoDataService;

  abstract updateTodoById(id: number, values: Object): Todo;

  abstract getAllTodos(): Todo[];

  abstract getTodoById(id: number): Todo;

  abstract toggleTodoComplete(todo: Todo);
}

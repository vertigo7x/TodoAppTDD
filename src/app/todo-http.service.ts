import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpDataService implements TodoDataService {

  public lastId = 0;
  public todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    // Not implemented
    return this;
  }

  addTodos(todos: Todo[]): TodoDataService {
    // Not implemented
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    // Not implemented
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    // Not implemented
    return new Todo();
  }

  getAllTodos(): Todo[] {
    // Not implemented
    return [];
  }

  getTodoById(id: number): Todo {
    // Not implemented
    return new Todo();
  }

  toggleTodoComplete(todo: Todo) {
    // Not implemented
    return new Todo();
  }
}

import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoInMemoryDataService implements TodoDataService {

  public lastId = 0;
  public todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  addTodos(todos: Todo[]): TodoDataService {
    if (todos.length > 0) {
      this.todos = [...todos];
      return this;
    }
    return null
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}

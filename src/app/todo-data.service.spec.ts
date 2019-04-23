import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });

  it('should should have default properties', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service.lastId).toBeDefined();
    expect(service.todos).toBeDefined();
  });

  it('should add todo to service', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service.addTodo(returnOneTodo())).toBeTruthy();
    expect(service.todos).toContain(returnOneTodo());
  });

  it('should add todo to service and assign todo.id', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    const todo: Todo = new Todo({
      title: 'Test Add a Todo',
      complete: false
    })
    expect(service.addTodo(todo)).toBeTruthy();
    expect(service.lastId).toBeGreaterThan(0);
  });

  it('should return all added todos from array', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodos(returnTodoArray());
    expect(service.getAllTodos().length).toEqual(3);
  });

  it('should return null from empty todo array', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodos([]);
    expect(service.getAllTodos().length).toEqual(0);
  });

  it('should remove todo from service by Id', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo(returnOneTodo());
    expect(service.deleteTodoById(1)).toBeTruthy();
    expect(service.todos.length).toEqual(0);
  });

  it('should update todo properties', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo(returnOneTodo());
    expect(service.updateTodoById(1, {
      title: 'Updated Test',
      complete: true
    })).toBeTruthy();
    expect(service.updateTodoById(1)).toBeTruthy();
  });

  it('should not update todo properties due to wrong id', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo(returnOneTodo());
    expect(service.updateTodoById(2, {
      title: 'Updated Test',
      complete: true
    })).toBeNull();
  });

  it('should toggle todo as complete', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo(returnOneTodo());
    let completedTodo = service.toggleTodoComplete(returnOneTodo());
    expect(completedTodo.complete).toBeTruthy();
  });
});

// Helpers
function returnOneTodo(): Todo {
  return new Todo({
    id: 1,
    title: 'Test Add a Todo',
    complete: false
  });
}

function returnTodoArray(): Todo[] {
  return [new Todo({
    id: 1,
    title: 'Test Add a Todo',
    complete: false
  }),
  new Todo({
    id: 2,
    title: 'Test Add a Todo',
    complete: false
  }),
  new Todo({
    id: 3,
    title: 'Test Add a Todo',
    complete: false
  })];
}

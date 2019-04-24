import { TestBed } from '@angular/core/testing';

import { Todo } from './todo';
import { TodoInMemoryDataService } from './todo-inmemory.service';

describe('TodoInMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    expect(service).toBeTruthy();
  });

  it('should should have default properties', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    expect(service.lastId).toBeDefined();
    expect(service.todos).toBeDefined();
  });

  it('should add todo to service', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    expect(service.addTodo(returnOneTodo())).toBeTruthy();
    expect(service.todos).toContain(returnOneTodo());
  });

  it('should add todo to service and assign todo.id', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    const todo: Todo = new Todo({
      title: 'Test Add a Todo',
      complete: false
    })
    expect(service.addTodo(todo)).toBeTruthy();
    expect(service.lastId).toBeGreaterThan(0);
  });

  it('should return all added todos from array', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    service.addTodos(returnTodoArray());
    expect(service.getAllTodos().length).toEqual(3);
  });

  it('should return null from empty todo array', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    service.addTodos([]);
    expect(service.getAllTodos().length).toEqual(0);
  });

  it('should remove todo from service by Id', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    service.addTodo(returnOneTodo());
    expect(service.deleteTodoById(1)).toBeTruthy();
    expect(service.todos.length).toEqual(0);
  });

  it('should update todo properties', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    service.addTodo(returnOneTodo());
    expect(service.updateTodoById(1, {
      title: 'Updated Test',
      complete: true
    })).toBeTruthy();
    expect(service.updateTodoById(1)).toBeTruthy();
  });

  it('should not update todo properties due to wrong id', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
    service.addTodo(returnOneTodo());
    expect(service.updateTodoById(2, {
      title: 'Updated Test',
      complete: true
    })).toBeNull();
  });

  it('should toggle todo as complete', () => {
    const service: TodoInMemoryDataService = TestBed.get(TodoInMemoryDataService);
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

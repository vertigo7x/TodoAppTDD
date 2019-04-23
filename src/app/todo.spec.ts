import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('containt instance properties', () => {
    const todo = new Todo({
      id: 1,
      title: 'Prueba',
      complete: true
    });
    expect(todo.id).toBeTruthy();
    expect(todo.title).toBeTruthy();
    expect(todo.complete).toBeTruthy();
  });
});

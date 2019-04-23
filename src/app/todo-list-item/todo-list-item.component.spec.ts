import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { Todo } from '../todo';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit ToggleTodoComplete', () => {
    spyOn(component.toggleComplete, 'emit');
    const todo = new Todo();
    component.toggleTodoComplete(todo);
    expect(component.toggleComplete.emit).toHaveBeenCalledWith(todo);
  });

  it('should emit RemoveTodo', () => {
    spyOn(component.remove, 'emit');
    const todo = new Todo();
    component.removeTodo(todo);
    expect(component.remove.emit).toHaveBeenCalledWith(todo);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { Todo } from '../todo';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoListItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit ToggleTodoComplete', () => {
    spyOn(component.toggleComplete, 'emit');
    const todo = new Todo();
    component.onToggleTodoComplete(todo);
    expect(component.toggleComplete.emit).toHaveBeenCalledWith(todo);
  });

  it('should emit RemoveTodo', () => {
    spyOn(component.remove, 'emit');
    const todo = new Todo();
    component.onRemoveTodo(todo);
    expect(component.remove.emit).toHaveBeenCalledWith(todo);
  });
});

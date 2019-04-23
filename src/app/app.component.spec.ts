import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from './todo';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        TodoListHeaderComponent,
        TodoListComponent,
        TodoListItemComponent,
        TodoListFooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo-app');
  });

  it('should add new Todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onAddTodo(new Todo());
    expect(app.todoDataService.getTodoById(app.todoDataService.lastId)).toBeTruthy();
  });

  it('should toggle Todo as completed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onAddTodo(new Todo());
    app.onToggleTodoComplete(app.todoDataService.getTodoById(app.todoDataService.lastId));
    expect(app.todoDataService.getTodoById(app.todoDataService.lastId)).toBeTruthy();
  });

  it('should remove Todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onAddTodo(new Todo());
    app.onRemoveTodo(app.todoDataService.getTodoById(app.todoDataService.lastId));
    expect(app.todoDataService.getTodoById(app.todoDataService.lastId)).toBeFalsy();
  });

  it('should return all Todos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onAddTodo(new Todo());
    app.onAddTodo(new Todo());
    app.onAddTodo(new Todo());
    expect(app.todos).toBeTruthy();
  });
});

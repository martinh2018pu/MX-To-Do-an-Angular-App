import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Your todo list";
  todos: Todo[] = [];
  newTodo: string;

  createTodo(): void {
    if (this.newTodo) {
      let todoForCreating: Todo = {
        name: this.newTodo,
        isCompleted: false
      };
      this.todos.push(todoForCreating);
      this.newTodo = '';
    } else {
      alert('Please enter your to-do.');
    }
  }

  setIsCompleted(id: number): void {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((value: Todo, index: number) => index !== id);
  }
}

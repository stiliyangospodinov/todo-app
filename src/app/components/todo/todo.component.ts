import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  form: Partial<Todo> = { title: '', description: '' };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe(t => this.todos = t);
  }

  add() {
    if (!this.form.title?.trim()) return;

    const todo: Todo = {
      title: this.form.title!,
      description: this.form.description || '',
      createdAt: Date.now(),
      isDone: false
    };

    this.todoService.create(todo);
    this.form = { title: '', description: '' };
  }

  markDone(todo: Todo) {
    if (!todo.id || todo.isDone) return;
    this.todoService.update(todo.id, { isDone: true });
  }

  delete(id?: string) {
    if (!id) return;
    this.todoService.remove(id);
  }
}
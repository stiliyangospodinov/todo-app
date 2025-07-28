import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [DatePipe],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  form: Partial<Todo> = {
    title: '',
    description: ''
  };

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  async add() {
    const title = this.form.title?.trim();
    if (!title) return;

    const todo: Todo = {
      title,
      description: this.form.description || '',
      createdAt: Date.now(),
      isDone: false
    };

    try {
      await this.todoService.add(todo);
      this.form = { title: '', description: '' };
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  }

  markDone(todo: Todo) {
    if (!todo.id || todo.isDone) return;
    this.todoService.update(todo.id, { isDone: true });
  }

  delete(id?: string) {
    if (!id) return;
    this.todoService.delete(id);
  }
}

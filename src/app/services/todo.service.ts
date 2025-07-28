import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, orderBy, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private db = inject(Firestore);

  getTodos(): Observable<Todo[]> {
    const ref = collection(this.db, 'todos');
    const q = query(ref, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Todo[]>;
  }

  add(todo: Todo) {
    const ref = collection(this.db, 'todos');
    return addDoc(ref, todo);
  }

  update(id: string, data: Partial<Todo>) {
    const ref = doc(this.db, `todos/${id}`);
    return updateDoc(ref, data);
  }

  delete(id: string) {
    const ref = doc(this.db, `todos/${id}`);
    return deleteDoc(ref);
  }
}

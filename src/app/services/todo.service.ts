import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Todo } from '../models/todo.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private afs: AngularFirestore) {}

  fetchTodos() {
    return this.afs
      .collection<Todo>('todos', ref => ref.orderBy('createdAt', 'desc'))
      .snapshotChanges()
      .pipe(
        map(snaps =>
          snaps.map(snap => {
            const data = snap.payload.doc.data();
            const id = snap.payload.doc.id;
            return { id, ...data } as Todo;
          })
        )
      );
  }

  create(todo: Todo) {
    return this.afs.collection('todos').add(todo);
  }

  update(id: string, updates: Partial<Todo>) {
    return this.afs.doc(`todos/${id}`).update(updates);
  }

  remove(id: string) {
    return this.afs.doc(`todos/${id}`).delete();
  }
}
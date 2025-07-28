import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAeUvUwd7tpgJ_5dIfYNYz5h3wTBsHStV4",
  authDomain: "todo-app-a5297.firebaseapp.com",
  projectId: "todo-app-a5297",
  storageBucket: "todo-app-a5297.firebasestorage.app",
  messagingSenderId: "638613547244",
  appId: "1:638613547244:web:e25afa3ed936fb6ae75dc9",
  measurementId: "G-KC4KXBGXVT"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
  ]
});
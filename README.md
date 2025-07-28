# Angular TODO App with Firebase

This is a simple, functional TODO application built with Angular 16+ and Firebase Firestore.  
Users can create tasks, view them, mark them as done, and delete them. Once a task is marked as "done", it becomes locked from further changes.

---

## ✅ Features

- Create a task with title and optional description
- Save tasks to Firebase in real-time
- View all tasks with:
  - Title
  - Description
  - Status (Done / Pending)
  - Created date
- Mark tasks as done (locks them)
- Delete tasks
- Basic error handling

---

## ⚙️ Prerequisites

Before running the app locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (v16 or newer)
- A Firebase account (free)

---

## 🔥 Firebase Setup Instructions

### 1. Create Firebase Project

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project (no need for Google Analytics)
- In the project, go to **Firestore Database** and click **Create Database** (Start in test mode)

### 2. Add a Web App

- In the Firebase Project Overview, click **Add App** > **Web**
- Register your app (e.g. `todo-app`)
- Copy the provided Firebase config (we’ll use it below)

---

## 📁 Configuring Firebase in Angular

Open `src/main.ts` and paste your Firebase config:

```ts
const firebaseConfig = {
  apiKey: "AIzaSyAeUvUwd7tpgJ_5dIfYNYz5h3wTBsHStV4",
  authDomain: "todo-app-a5297.firebaseapp.com",
  projectId: "todo-app-a5297",
  storageBucket: "todo-app-a5297.firebasestorage.app",
  messagingSenderId: "638613547244",
  appId: "1:638613547244:web:e25afa3ed936fb6ae75dc9",
  measurementId: "G-KC4KXBGXVT"
};

    ⚠️ Make sure Firestore is enabled in the Firebase console.

🔐 Firestore Rules

Set these rules in the Firestore "Rules" tab to allow full read/write during development:

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

🚀 Running the App Locally

npm install
ng serve

Once compiled, the app should be live at:

http://localhost:4200

🏗️ Building for Production (Optional)

ng build --configuration production

The compiled output will be in the dist/ folder.
📝 Known Limitations

    Editing tasks (title/description) after creation is not implemented

    Toast notifications are not yet added

    No sort/filter by date or status (future enhancement)

    Tasks cannot be marked "undone" after completion (by design)

📌 Bonus Ideas (Not Implemented Yet)

    Toasts for success/error messages

    Responsive design --done

    Filtering by status or creation date --done

    Authentication with Firebase Auth

👨‍💻 Author Notes

This project was created as part of a coding task and follows the given technical and functional requirements closely.
Firebase is used only for data storage — no authentication or storage used.

Pull requests welcome 😊
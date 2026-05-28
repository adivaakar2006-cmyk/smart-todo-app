<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=250&section=header&text=Smart%20Todo&fontSize=80&fontAlignY=35&desc=The%20Ultimate%20Task%20Management%20Experience&descAlignY=55" alt="Header Banner" />
  <br />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />

  <h3 align="center">A Full-Stack, High-Performance Todo Application</h3>

  <p align="center">
    Built to showcase mastery over modern UI/UX principles, complex state management, and real-time backend synchronization.
    <br />
  </p>
</div>

---

## ⚡ Why This Project? (For Recruiters & Hiring Managers)

This is not just another todo app. `Smart Todo` is designed to solve real productivity problems with a polished user experience and a robust backend.

- **Persistent multi-device sync:** Users sign in and access the same task list on any device thanks to Firebase Authentication and Firestore.
- **Advanced task management:** Supports filtering, search, sorting, categories, drag-and-drop ordering, and inline editing.
- **Premium UX:** Built with polished animations, glassmorphism styling, and toast notifications for fast feedback.

---

## ✨ Standout Features

| Feature | Description |
| :--- | :--- |
| **🔐 Secure Authentication** | Email/password login and sign-up plus Google OAuth powered by Firebase Authentication. |
| **☁️ Real-Time Sync** | Cloud Firestore keeps task updates synced instantly across sessions. |
| **📦 Fluid Drag & Drop** | Reorder tasks manually using `@hello-pangea/dnd`, with changes persisted in Firestore. |
| **🎨 Glassmorphism UI** | Custom modern styling with backdrop filters, shadows, and responsive layout. |
| **🌓 Theme Engine** | Dark mode and light mode toggle via global theme state. |
| **🚀 Instant Feedback** | `react-hot-toast` notifications confirm success and surface errors immediately. |

---

## 🧩 What You Can Do

- Create and categorize tasks by `Work`, `Personal`, or `Shopping`
- Set a due date for each task
- Mark tasks complete or active
- Edit task titles inline
- Delete tasks quickly
- Search tasks by title
- Filter by status and category
- Sort by manual order or due date
- Persist user data in Firebase

---

## 📸 Sneak Peek

> ![App Screenshot Placeholder](https://via.placeholder.com/800x400.png?text=Drop+Your+App+Screenshot+Here)

---

## 🧠 Engineering Challenges & Solutions

> **Problem 1: Complex UI state management**
>
> *Challenge:* Coordinating filtering, searching, sorting, and drag/drop while preserving backend order and responsive rendering.
>
> *Solution:* Implemented memoized task selection logic in `Dashboard.jsx` so the UI updates efficiently without unnecessary re-renders.

> **Problem 2: Persisting manual sort order in Firestore**
>
> *Challenge:* Firestore does not store list indices automatically for separate documents.
>
> *Solution:* Added an `order` field to tasks and saved the updated numeric order after drag-and-drop reordering, keeping backend data aligned with the UI.

---

## 🚀 Run It Locally

### Prerequisites

- Node.js 18+ or newer
- npm or yarn

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔧 Project Structure

- `src/App.jsx` — Root app component with theme provider and auth guard
- `src/pages/Dashboard.jsx` — Main todo dashboard and task control logic
- `src/components/Auth.jsx` — Login/signup UI and auth switching
- `src/components/TaskForm.jsx` — New task creation form
- `src/components/TaskList.jsx` — Drag-and-drop task list container
- `src/components/TaskItem.jsx` — Task item card with edit/delete controls
- `src/components/Filters.jsx` — Search, filter, and sort UI
- `src/hooks/useAuth.js` — Firebase authentication hook
- `src/hooks/useTasks.js` — Firestore task management hook
- `src/services/firebaseSetup.js` — Firebase app initialization

---

## ⚙️ Firebase Setup

The Firebase config is already included in `src/services/firebaseSetup.js`.

To use your own Firebase project:

1. Create a Firebase project in the Firebase console.
2. Enable Authentication with Email/Password and Google providers.
3. Enable Firestore.
4. Replace the config object in `src/services/firebaseSetup.js` with your project values.

---

## 📝 Notes

- Manual reordering is only active when `Manual Order` is selected.
- Search, filter, and sort run on the client side for the current user’s task list.
- Toast notifications provide immediate feedback for add/update/delete actions.

---

Built with ❤️ by an aspiring Software Engineer.

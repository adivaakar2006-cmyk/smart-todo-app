# Smart Todo App 🚀

https://smart-todo-app-sage-nu.vercel.app/

A full-stack, recruiter-ready React Todo application built with Firebase, featuring authentication, drag-and-drop task reordering, and a sleek dark/light mode toggle.

## Live Demo 🌐
> **[Insert Vercel Link Here]**

## Screenshots 📸
> *(Add your screenshots here: Homepage, Dark Mode, Drag and Drop action)*

## Features ✨
- **Authentication 🔐:** Sign up and log in securely via Firebase Auth (Email/Password & Google Auth).
- **Backend Sync 🔗:** Tasks are stored in Cloud Firestore and synced instantly across devices.
- **Drag and Drop 📦:** Reorder your tasks seamlessly using `@hello-pangea/dnd`.
- **Advanced Filtering 🔍:** Search tasks by name, filter by status/category, and sort by due dates.
- **Dark & Light Mode 🌙☀️:** Complete theme switching with glassmorphism aesthetics.
- **Animations ✨:** Smooth mounting and unmounting animations powered by `framer-motion`.
- **Toast Notifications 🍞:** Sleek popup alerts for user actions using `react-hot-toast`.
- **Fully Responsive 📱:** Looks stunning on mobile, tablet, and desktop viewports.

## Tech Stack 🧠
- **Frontend:** React, Vite
- **Styling:** Vanilla CSS, CSS Variables (Glassmorphism design)
- **Backend as a Service:** Firebase (Auth, Firestore)
- **Libraries:** Framer Motion, Hello Pangea DnD, React Hot Toast

## Setup Instructions 🛠️

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/smart-todo-app.git
   cd smart-todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Firebase Setup:**
   - Create a project on [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password & Google) and Firestore Database.
   - Replace the `firebaseConfig` object in `src/services/firebaseSetup.js` with your own keys.

4. **Run the app locally:**
   ```bash
   npm run dev
   ```

## Deployment 🚀
This project is optimized for deployment on Vercel. 
Simply push the code to your GitHub, import the repository in Vercel, and hit deploy!

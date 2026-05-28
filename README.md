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
    <br />
    <a href="https://smart-todo-app-sage-nu.vercel.app"><strong>View Live Demo »</strong></a>
    <br />
  </p>
</div>

---

## ⚡ Why This Project? (For Recruiters & Hiring Managers)

This is not just another "To-Do List". This application was architected from the ground up to solve **real-world enterprise problems**:
- **Data Persistence & Security:** Implementing secure OAuth flows and instantly syncing data across devices using Firebase.
- **Complex UI State:** Managing multi-layered state (filtering, sorting, searching, and drag-and-drop ordering) without sacrificing rendering performance.
- **Micro-Interactions:** Ensuring the user feels completely in control through buttery-smooth 60fps animations and instant toast notifications.

---

## ✨ Standout Features

| Feature | Description |
| :--- | :--- |
| **🔐 Secure Authentication** | Email/Password and Google OAuth integration with protected application routing. |
| **☁️ Real-Time Sync** | Built on Cloud Firestore. Changes happen instantly via local caching and sync automatically to the cloud. |
| **📦 Fluid Drag & Drop** | Physical task reordering using `@hello-pangea/dnd` with custom numerical indexing saved directly to the database. |
| **🎨 Glassmorphism UI** | A completely custom, premium CSS design utilizing CSS variables, backdrop filters, and grid layouts. |
| **🌓 Theme Engine** | A global Context API that allows instantaneous toggling between sleek Dark Mode and vibrant Light Mode. |
| **🚀 Optimistic Updates** | The UI updates before the server responds, creating an impossibly fast, zero-latency user experience. |

---

## 📸 Sneak Peek

*(Pro-Tip: Take a screenshot or screen-recording of your live app and drop the image here!)*

> ![App Screenshot Placeholder](https://via.placeholder.com/800x400.png?text=Drop+Your+App+Screenshot+Here)

---

## 🧠 Engineering Challenges & Solutions

> **Problem 1: Animation vs. DOM Manipulation Conflicts**
> 
> *Challenge:* Mixing `framer-motion` exit animations with the drag-and-drop library caused visual stuttering because both libraries were trying to control the DOM element simultaneously. 
> 
> *Solution:* I engineered a conditional rendering wrapper that temporarily disables Framer Motion's presence checks while the user is actively dragging an item, ensuring a flawless 60fps drag experience.

> **Problem 2: Persistent Custom Sorting in NoSQL**
> 
> *Challenge:* Firebase does not natively support "array index" reordering for distinct documents.
> 
> *Solution:* I designed a mathematical `order` indexing system. When a user drags a task, the frontend calculates a new `order` float value between the adjacent tasks and pushes the atomic update to Firestore, requiring custom composite indexes to query effectively.

---

## 🛠️ Run it Locally

Want to see the code in action on your own machine?

**1. Clone the repository**
```bash
git clone https://github.com/your-username/smart-todo-app.git

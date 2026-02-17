# 🚀 M.Y.F. Frontend - Project Management System

The client-side application for **Manage Your Flow**, a professional task and project tracking system. This project focuses on a seamless user experience, complex state management, and enterprise-level UI components.

<p align="left">
  <a href="https://manage-your-flow.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-🚀-FF5722?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
  <a href="https://github.com/rahilevych/manage-your-flow-back" target="_blank">
    <img src="https://img.shields.io/badge/Backend_Repo-⚙️-blue?style=for-the-badge&logo=github" alt="Backend">
  </a>
</p>

> [!NOTE]
> This frontend communicates with a NestJS API. For the best experience, ensure the backend is active. Initial loading might take a moment due to free-tier hosting on Render

---

## 🖼️ Preview

<img width="1920" height="1786" alt="landing" src="https://github.com/user-attachments/assets/587647eb-1e06-4f95-8185-764bb00765ef" />
<img width="1920" height="868" alt="signIn" src="https://github.com/user-attachments/assets/fda64448-5172-452c-9547-0bfc29c08560" />
<img width="1920" height="868" alt="signUp" src="https://github.com/user-attachments/assets/3428b4fc-c114-448f-abbf-baa4844d6cfd" />
<img width="1920" height="868" alt="welcome" src="https://github.com/user-attachments/assets/d002cf23-1ffe-4c3d-96cc-63adb5ebb797" />
<img width="1920" height="868" alt="home" src="https://github.com/user-attachments/assets/e391cd9f-c489-4529-b543-adffc593379a" />
<img width="1920" height="868" alt="projects" src="https://github.com/user-attachments/assets/32e812bb-765a-4a8c-a368-b5081af2712f" />
<img width="1920" height="868" alt="project" src="https://github.com/user-attachments/assets/7ae4e047-37b1-42c2-9861-bc4bcfab8566" />
<img width="1920" height="938" alt="settings" src="https://github.com/user-attachments/assets/95ded6c0-595a-419d-ac4e-41f1c0740335" />

---

## ✨ Key Frontend Features

* **Forms:** Robust project and task creation using `React Hook Form` and `Zod` validation.
* **Optimistic Updates:** Using `TanStack Query` to provide an instant UI response while syncing with the server.
* **Authentication Flow:** Secure JWT  and protected routes.
* **Theming & UI:** Built with `Shadcn/ui` and `Tailwind CSS` for a consistent, accessible, and responsive design.

## 🛠 Tech Stack

* **Core:** React + TypeScript + Vite
* **UI Components:** Shadcn/ui (Radix UI under the hood)
* **Styling:** Tailwind CSS
* **Server State:** TanStack Query (React Query) — for caching, synchronization, and error handling.
* **Form Management:** React Hook Form + Zod.
* **Icons:** Lucide React.

## 🏗 Frontend Architecture

The project is built using **Feature-Sliced Design (FSD)**. This architectural methodology allows for a clear separation of concerns, making the codebase scalable, easy to test, and maintain.

### Layers:
- **`app/`** - Application logic: providers, global styles, and routing setup.
- **`pages/`** - Composition layer that assembles widgets into full pages 
- **`widgets/`** - Large self-contained components that combine features 
- **`features/`** - User-facing actions that carry business value
- **`entities/`** - Business logic and data models for core objects:
    - **auth**: Authentication state and profile logic
    - **project**: Project-specific data, types, and hooks
    - **task**: Task-related state management and components
- **`shared/`** - Reusable, project infrastructure:
    - `ui/`: Design system based on **Shadcn/ui**
    - `api/`: Axios instance, interceptors, and base configurations
    - `lib/`: Utils, shared hooks, and context providers

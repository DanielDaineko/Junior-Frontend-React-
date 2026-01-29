# Fullstack Task Manager

A simple **fullstack task manager** built with **React**, **Node.js**, and **PostgreSQL**.  
The project demonstrates basic CRUD operations and frontend–backend interaction.

---

## 🔹 Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Fetch tasks from REST API
- Responsive UI

---

## 🔹 Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express
- PostgreSQL
- pg
- dotenv

---

## 🔹 Project Structure

fullstack-task-manager/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── main.jsx
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
└── README.md

---

## 🔹 How to Run Locally

## 🔹 Backend

```bash
cd backend
npm install
npm run dev

---

## 🔹 Create .env file:

PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/task_manager

---

## 🔹 Frontend

cd frontend
npm install
npm run dev

---

## 🔹 Frontend runs

http://localhost:5173

## 🔹 Backend runs

http://localhost:5000

---

## 🔹 API Endpoints

- GET /api/tasks – get all tasks
- POST /api/tasks – create task
- PATCH /api/tasks/:id – toggle task
- DELETE /api/tasks/:id – delete task

---

## 🔹 What I Practiced

- React hooks (useState, useEffect)
- REST API integration
- Express server setup
- PostgreSQL connection
- Fullstack project structure

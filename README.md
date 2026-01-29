# Fullstack Task Manager (React + Node.js + PostgreSQL)

A simple **fullstack task manager application** built with **React**, **Node.js (Express)**, and **PostgreSQL**.  
This project demonstrates basic CRUD operations, REST API integration, and modern frontend practices.

---

## Features

- Create new tasks
- Mark tasks as completed
- Delete tasks
- Real-time UI updates without page reload
- REST API integration
- Clean and responsive UI

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv
- nodemon

---

## Project Structure

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

## How to run locally

### Backend

```bash
cd backend
npm install
npm run dev

Create .env file in backend folder:
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/task_manager

Backend runs on:
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173
```

## API Endpoints

- GET `/api/tasks` – get all tasks  
- POST `/api/tasks` – create a new task  
- PATCH `/api/tasks/:id` – toggle task completion  
- DELETE `/api/tasks/:id` – delete a task  

## What I Practiced

- React hooks (`useState`, `useEffect`)
- REST API integration
- Express server setup
- PostgreSQL database connection
- Fullstack project structure

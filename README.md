# Fullstack Task Manager (React + Node.js)

A simple fullstack task manager application that demonstrates basic CRUD operations
and frontend–backend interaction.

## What was done

- Implemented task creation, completion toggle and deletion
- Connected React frontend to REST API
- Built backend with Express and PostgreSQL
- Handled loading and error states
- Created a clean and responsive UI

## Tech Stack

**Frontend:** React, Vite, JavaScript, CSS  
**Backend:** Node.js, Express  
**Database:** PostgreSQL  
**Other:** dotenv, pg

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

Frontend
cd frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173

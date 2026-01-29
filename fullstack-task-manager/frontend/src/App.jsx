import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadTasks() {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error(err);
      alert("Ошибка загрузки задач (проверь backend)");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(e) {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Ошибка добавления");
        return;
      }

      setTasks([data, ...tasks]);
      setTitle("");
    } catch (err) {
      console.error(err);
      alert("Ошибка при добавлении задачи");
    }
  }

  async function toggleTask(task) {
    try {
      const res = await fetch(`${API_URL}/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: !task.done }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Ошибка обновления");
        return;
      }

      setTasks(tasks.map((t) => (t.id === task.id ? data : t)));
    } catch (err) {
      console.error(err);
      alert("Ошибка при обновлении задачи");
    }
  }

  async function deleteTask(id) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Ошибка удаления");
        return;
      }

      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
      alert("Ошибка при удалении задачи");
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h1>✅ Task Manager</h1>

        <form onSubmit={addTask} className="form">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Новая задача..."
          />
          <button type="submit">Добавить</button>
        </form>

        {loading ? (
          <p>Загрузка...</p>
        ) : tasks.length === 0 ? (
          <p>Задач пока нет 🙂</p>
        ) : (
          <ul className="list">
            {tasks.map((task) => (
              <li key={task.id} className={task.done ? "done" : ""}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                  />
                  <span>{task.title}</span>
                </label>

                <button className="delete" onClick={() => deleteTask(task.id)}>
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

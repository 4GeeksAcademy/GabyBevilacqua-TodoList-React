import React, { useState } from "react";
import TodoList from "./TodoList";

const Home = () => {

	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const addTask = () => {
		if (newTask.trim() === "") return; // Evitar tareas vacías
		setTasks([...tasks, newTask.trim()]);
		setNewTask(""); // Limpiar el campo de entrada
	};

	// Eliminar una tarea por índice
	const deleteTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<>
			<div className="card justify-content-center align-items-center shadow col-6 mx-auto mt-5">
				<h1 className="card-title mb-3">
					Lista de Tareas
				</h1>

				<input
					className="text-center"
					type="text"
					placeholder="Añade una nueva tarea"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button
					type="button"
					className="btn btn-outline-secondary mt-2"
					onClick={addTask}>
					<i className="fas fa-plus-circle me-2"></i>
					Agregar
				</button>
				<TodoList tasks={tasks} deleteTask={deleteTask} />
				<p>{tasks.length} Tareas pendientes</p>
			</div>

		</>
	);
};
export default Home;

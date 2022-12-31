import React, { useState } from "react";

import "./app.css";
import Tasks from "./components/Tasks.js";

const App = () => {
	let [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Estudar Programação",
			completed: false
		},
		{
			id: "2",
			title: "Ler Livros",
			completed: true
		},
		{
			id: "3",
			title: "Ler Livros",
			completed: true
		}
	]);

    return (
		<>
			<div className="container">
				<Tasks tasks={tasks}/>
			</div>
		</>
			);
};

export default App;
import React, { useState } from "react";

import "./app.css";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx"

import {v4 as uuidv4} from 'uuid';

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
		}
	]);


	const handleTaskAddition = (taskTitle) => {
		const newTasks = [...tasks, {
			title: taskTitle,
			id: uuidv4(),
			completed: false
		}];

		setTasks(newTasks);
	}


    return (
		<>
			<div className="container">
				<AddTask handleTaskAddition={handleTaskAddition} />
				<Tasks tasks={tasks}/>
			</div>
		</>);
};

export default App;
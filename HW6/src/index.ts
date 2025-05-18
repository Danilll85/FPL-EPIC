import { createAddTaskComponent } from "./components/AddTaskComponent/index";
import { createFilterComponent } from "./components/FilterComponent/index";
import "./components/TasksTableComponent/index";
import { createTasksTableComponent, removeTasksTableComponent } from "./components/TasksTableComponent/index";
import { task } from "./components/types/taskType";


export let currentTasks: task[] = JSON.parse(localStorage.getItem("toDoTasks") as string);
if (!currentTasks) {
  currentTasks = [];
  localStorage.setItem("toDoTasks", JSON.stringify([]));
}

let currentLength = currentTasks.length;

console.log(`[main] ${currentTasks}`);

createAddTaskComponent();
createFilterComponent();
createTasksTableComponent();


const intervalId = setInterval(() => {
  console.log('[interval]');
  
  if (currentTasks.length == currentLength) return;

  currentLength = currentTasks.length;

  removeTasksTableComponent();
  createTasksTableComponent();
}, 1000);

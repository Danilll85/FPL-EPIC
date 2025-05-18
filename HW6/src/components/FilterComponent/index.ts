import { currentTasks } from "../..";
import { createTasksTableComponent, removeTasksTableComponent } from "../TasksTableComponent";
import "./styles.scss";

export const createFilterComponent = () => {
  const filterContainer = document.getElementById("filter");
  const filterOptions = document.createElement("div");
  filterOptions.classList.add("filter-options");

  const showCompletedBlock = document.createElement("div");
  showCompletedBlock.classList.add("show-completed-block");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.id = 'show-completed';
  checkboxInput.addEventListener("change", (e) => handleCheck(e));

  const checkboxTitle = document.createElement("span");
  checkboxTitle.textContent = "Show completed";
  showCompletedBlock.appendChild(checkboxInput);
  showCompletedBlock.appendChild(checkboxTitle);

  filterOptions.appendChild(showCompletedBlock);

  //Date From
  const dateFromLabel = document.createElement("label");
  dateFromLabel.textContent = "Date From";
  dateFromLabel.htmlFor = "dateFrom";

  const dateFromInput = document.createElement("input");
  dateFromInput.classList.add("date-input");
  dateFromInput.type = "date";
  dateFromInput.id = "dateFrom";
  dateFromInput.name = "dateFrom";

  filterOptions.appendChild(dateFromLabel);
  filterOptions.appendChild(dateFromInput);

  //Date To
  const dateToLabel = document.createElement("label");
  dateToLabel.textContent = "Date To";
  dateToLabel.htmlFor = "dateTo";

  const dateToInput = document.createElement("input");
  dateToInput.classList.add("date-input");

  dateToInput.type = "date";
  dateToInput.id = "dateTo";
  dateToInput.name = "dateTo";

  filterOptions.appendChild(dateToLabel);
  filterOptions.appendChild(dateToInput);

  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Text search (title + description)";

  filterContainer?.appendChild(filterOptions);
  filterContainer?.appendChild(search);
};

const handleCheck = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target.checked) {
    //true
    const filteredTasks = currentTasks.filter((task) => task.isCompleted === true);
    removeTasksTableComponent();
    createTasksTableComponent(filteredTasks);
    return;
  }

  const filteredTasks = currentTasks.filter((task) => task.isCompleted === false);
  removeTasksTableComponent();
  createTasksTableComponent(filteredTasks);
};

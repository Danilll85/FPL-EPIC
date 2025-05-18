import { currentTasks } from "../..";
import { createTasksTableComponent, removeTasksTableComponent } from "../TasksTableComponent";
import "./styles.scss";
import { task } from "../types/taskType";

export const createFilterComponent = () => {
  const filterContainer = document.getElementById("filter");
  const filterOptions = document.createElement("div");
  filterOptions.classList.add("filter-options");

  const showCompletedBlock = document.createElement("div");
  showCompletedBlock.classList.add("show-completed-block");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.id = "show-completed";
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

  search.addEventListener("input", () => handleSearch());

  dateFromInput.addEventListener("change", () => handleDateFilter());
  dateToInput.addEventListener("change", () => handleDateFilter());

  filterContainer?.appendChild(filterOptions);
  filterContainer?.appendChild(search);
};

const handleSearch = () => {
  const filteredTasks = currentTasks.filter((task) => {
    return matchesSearchFilter(task) && matchesDateFilter(task) && matchesCompletionFilter(task);
  });

  removeTasksTableComponent();
  createTasksTableComponent(filteredTasks);
};

const handleDateFilter = () => {
  const filteredTasks = currentTasks.filter(
    (task) => matchesDateFilter(task) && matchesCompletionFilter(task) && matchesSearchFilter(task)
  );

  removeTasksTableComponent();
  createTasksTableComponent(filteredTasks);
};

const matchesDateFilter = (task: task): boolean => {
  const dateFromInput = document.getElementById("dateFrom") as HTMLInputElement;
  const dateToInput = document.getElementById("dateTo") as HTMLInputElement;

  const dateFrom = dateFromInput.value ? new Date(dateFromInput.value) : null;
  const dateTo = dateToInput.value ? new Date(dateToInput.value) : null;
  const taskDate = task.date ? new Date(task.date) : null;

  if (!taskDate) return true;

  const afterFrom = !dateFrom || taskDate >= dateFrom;
  const beforeTo = !dateTo || taskDate <= dateTo;

  return afterFrom && beforeTo;
};

const matchesCompletionFilter = (task: task): boolean => {
  const showCompletedCheckbox = document.getElementById("show-completed") as HTMLInputElement;
  return showCompletedCheckbox.checked ? true : !task.isCompleted;
};

const matchesSearchFilter = (task: task): boolean => {
  const searchInput = document.querySelector("input[type='text']") as HTMLInputElement;
  const searchTerm = searchInput.value;

  return searchTerm === "" || task.title.includes(searchTerm) || (task.description ?? "").includes(searchTerm);
};

const handleCheck = (e: Event) => {
  applyAllFilters();
};

const applyAllFilters = () => {
  const filteredTasks = currentTasks.filter(
    (task) => matchesDateFilter(task) && matchesCompletionFilter(task) && matchesSearchFilter(task)
  );

  removeTasksTableComponent();
  createTasksTableComponent(filteredTasks);
};

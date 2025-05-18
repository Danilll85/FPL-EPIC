import "./styles.scss";
import { currentTasks } from "../..";
import { task } from "../types/taskType";

export const createAddTaskComponent = () => {
  const container = document.getElementById("add-task") as HTMLElement;
  const titleInput = document.createElement("input");
  titleInput.placeholder = "Title";
  titleInput.required = true;

  enum Priority {
    High = "High",
    Medium = "Medium",
    Low = "Low",
  }

  const prioritySelection = document.createElement("select");
  prioritySelection.value = "Priority";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Priority";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  prioritySelection.appendChild(placeholderOption);

  (Object.values(Priority) as Array<Priority>).forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    prioritySelection.appendChild(option);
  });

  const inputDate = document.createElement("input");
  inputDate.type = "date";

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main-info");
  mainInfo.appendChild(titleInput);
  mainInfo.appendChild(prioritySelection);
  mainInfo.appendChild(inputDate);

  const fullInfo = document.createElement("div");
  fullInfo.classList.add("full-info");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.value = "";

  fullInfo.appendChild(mainInfo);
  fullInfo.appendChild(descriptionInput);

  const addBtn = document.createElement("button");
  addBtn.id = "add-button";
  addBtn.textContent = "Add";
  addBtn.addEventListener("click", () => {
    if (!titleInput.value.trim()) {
      alert("add required info");
      return;
    }

    const task: task = {
      isCompleted: false,
      title: titleInput.value,
      priority: prioritySelection.value,
      date: inputDate.value,
      description: descriptionInput.value,
    };

    console.log(currentTasks);

    addToLocaleStorage(task);

    currentTasks.push(task);

    clearAddTaskInputs(titleInput, prioritySelection, inputDate, descriptionInput);
  });

  container.appendChild(fullInfo);
  container.appendChild(addBtn);
};

const clearAddTaskInputs = (
  titleInput: HTMLInputElement,
  priorityInput: HTMLSelectElement,
  dateInput: HTMLInputElement,
  descriptionInput: HTMLTextAreaElement
): void => {
  titleInput.value = "";
  priorityInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
};

const addToLocaleStorage = (task: task): void => {
  const tmp = JSON.parse(localStorage.getItem("toDoTasks") as string);
  tmp.push(task);
  console.log(tmp);

  localStorage.setItem("toDoTasks", JSON.stringify(tmp));
};

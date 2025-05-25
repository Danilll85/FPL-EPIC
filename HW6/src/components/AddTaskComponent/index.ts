import "./styles.scss";
import { currentTasks } from "../..";
import { task } from "../types/taskType";
import { Validator } from "../../validator";

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
  prioritySelection.required = true;

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
  inputDate.required = true;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.required = true;

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main-info");
  mainInfo.appendChild(titleInput);
  mainInfo.appendChild(prioritySelection);
  mainInfo.appendChild(inputDate);

  const fullInfo = document.createElement("div");
  fullInfo.classList.add("full-info");
  fullInfo.appendChild(mainInfo);
  fullInfo.appendChild(descriptionInput);

  const bottomBlock = document.createElement("div");
  bottomBlock.classList.add("bottom-block");

  const addBtn = document.createElement("button");
  addBtn.id = "add-button";
  addBtn.textContent = "Add";

  const errorBlock = document.createElement("span");
  errorBlock.className = "error-message";
  errorBlock.style.color = "red";

  const validator = new Validator(errorBlock, "error-field");
  validator.addInput(titleInput);
  validator.addInput(prioritySelection);
  validator.addInput(inputDate);
  validator.addInput(descriptionInput);

  addBtn.addEventListener("click", () => {
    if (!validator.validateAll()) {
      return;
    }

    const task: task = {
      isCompleted: false,
      title: titleInput.value,
      priority: prioritySelection.value,
      date: inputDate.value,
      description: descriptionInput.value,
    };

    addToLocaleStorage(task);
    currentTasks.push(task);
    clearAddTaskInputs(titleInput, prioritySelection, inputDate, descriptionInput);
  });

  bottomBlock.append(errorBlock, addBtn);
  container.appendChild(fullInfo);
  container.appendChild(bottomBlock);
};

const clearAddTaskInputs = (
  titleInput: HTMLInputElement,
  priorityInput: HTMLSelectElement,
  dateInput: HTMLInputElement,
  descriptionInput: HTMLTextAreaElement
): void => {
  titleInput.value = "";
  priorityInput.value = "";
  dateInput.valueAsDate = null;
  descriptionInput.value = "";
};

const addToLocaleStorage = (task: task): void => {
  const tmp = JSON.parse(localStorage.getItem("toDoTasks") as string);
  tmp.push(task);
  localStorage.setItem("toDoTasks", JSON.stringify(tmp));
};

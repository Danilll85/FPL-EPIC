import { currentTasks, key } from "../..";
import { task } from "../types/taskType";
import "./styles.scss";

export const createTasksTableComponent = (tasksArr: task[] = currentTasks) => {
  const container = document.getElementById("to-do-block");
  const table = document.createElement("table");
  const tableRowHeader = document.createElement("tr");
  const headerTitles: Array<string> = ["Done", "Title", "Priority", "Date"];

  for (let i = 0; i < 4; i++) {
    const th = document.createElement("th");
    const thContentWrapper = document.createElement("div");
    thContentWrapper.classList.add("th-content-wrapper");

    const headerText = document.createElement("div");
    headerText.textContent = headerTitles[i];

    if (i !== 0) {
      const sortBtnsWrapper = document.createElement("div");
      sortBtnsWrapper.classList.add("sort-btns-wrapper");

      const sortAscBtn = document.createElement("button");
      sortAscBtn.textContent = "▲";
      sortAscBtn.addEventListener("click", () => ascendingSort(tasksArr, i));

      const sortDescBtn = document.createElement("button");
      sortDescBtn.textContent = "▼";
      sortDescBtn.addEventListener("click", () => descendingSort(tasksArr, i));

      sortBtnsWrapper.appendChild(sortAscBtn);
      sortBtnsWrapper.appendChild(sortDescBtn);
      thContentWrapper.append(headerText, sortBtnsWrapper);
    } else {
      thContentWrapper.appendChild(headerText);
    }

    th.appendChild(thContentWrapper);
    tableRowHeader.appendChild(th);
  }

  table.appendChild(tableRowHeader);

  const input = document.getElementById("show-completed") as HTMLInputElement;
  if (input.checked) {
    tasksArr = tasksArr.filter((task) => task.isCompleted === true);
  } else {
    tasksArr = tasksArr.filter((task) => task.isCompleted === false);
  }

  const tableSize = tasksArr.length;
  for (let i = 0; i < tableSize; i++) {
    const tr = document.createElement("tr");
    const task = Object.values(tasksArr[i]);

    const originalIndex = currentTasks.findIndex(
      (t) => t.title === task[1] && t.priority === task[2] && t.date === task[3]
    );
    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");

      if (j == 0) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.cursor = "pointer";

        checkbox.addEventListener("change", (e) => changeTaskStatus(e, originalIndex));

        if (task[j]) {
          checkbox.checked = true;
        }

        td.appendChild(checkbox);
        tr.appendChild(td);
        continue;
      }

      td.textContent = task[j] as string;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  container?.appendChild(table);
};

export const removeTasksTableComponent = () => {
  const container = document.getElementById("to-do-block");
  container?.replaceChildren();
};

export const changeTaskStatus = (e: Event, index: number) => {
  const target = e.target as HTMLInputElement;
  currentTasks[index] = {
    ...currentTasks[index],
    isCompleted: target.checked,
  };
  localStorage.setItem(key, JSON.stringify(currentTasks));
  removeTasksTableComponent();
  createTasksTableComponent();
};

export const ascendingSort = (tasks: task[], index: number) => {
  const sortedTasks = [...tasks];
  switch (index) {
    case 1:
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 2:
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      sortedTasks.sort(
        (a, b) =>
          priorityOrder[a.priority as keyof typeof priorityOrder] -
          priorityOrder[b.priority as keyof typeof priorityOrder]
      );
      break;
    case 3:
      sortedTasks.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      break;
    default:
      return;
  }

  removeTasksTableComponent();
  createTasksTableComponent(sortedTasks);
};

export const descendingSort = (tasks: task[], index: number) => {
  const sortedTasks = [...tasks];
  switch (index) {
    case 1:
      sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 2:
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      sortedTasks.sort(
        (a, b) =>
          priorityOrder[b.priority as keyof typeof priorityOrder] -
          priorityOrder[a.priority as keyof typeof priorityOrder]
      );
      break;
    case 3:
      sortedTasks.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      break;
    default:
      return;
  }

  removeTasksTableComponent();
  createTasksTableComponent(sortedTasks);
};

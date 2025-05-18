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

    const sortBtnsWrapper = document.createElement("div");
    sortBtnsWrapper.classList.add("sort-btns-wrapper");

    const sortDescBtn = document.createElement("button");
    sortDescBtn.textContent = "▲";

    const sortAscBtn = document.createElement("button");
    sortAscBtn.textContent = "▼";
    sortBtnsWrapper.appendChild(sortDescBtn);
    sortBtnsWrapper.appendChild(sortAscBtn);

    thContentWrapper.append(headerText, sortBtnsWrapper);

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
  currentTasks[index] = { ...currentTasks[index], isCompleted: target.checked };
  localStorage.setItem(key, JSON.stringify(currentTasks));
  removeTasksTableComponent();
  createTasksTableComponent();
};

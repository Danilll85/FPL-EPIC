import { currentTasks } from "../..";
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
    thContentWrapper.classList.add('th-content-wrapper');

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

  const tableSize = tasksArr.length;
  for (let i = 0; i < tableSize; i++) {
    const tr = document.createElement("tr");
    const task = Object.values(tasksArr[i]);

    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");

      if (j == 0) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

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

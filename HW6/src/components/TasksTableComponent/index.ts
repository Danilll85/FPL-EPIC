import { currentTasks } from "../..";
import "./styles.scss";

export const createTasksTableComponent = () => {
  const container = document.getElementById("to-do-block");
  const table = document.createElement("table");
  const tableRowHeader = document.createElement("tr");
  const headerTitles: Array<string> = ["Done^v", "Title", "Priority", "Date"];

  for (let i = 0; i < 4; i++) {
    const th = document.createElement("th");
    th.textContent = headerTitles[i];
    tableRowHeader.appendChild(th);
  }

  table.appendChild(tableRowHeader);

  const tableSize = currentTasks.length;
  for (let i = 0; i < tableSize; i++) {
    const tr = document.createElement("tr");
    const task = Object.values(currentTasks[i]);

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

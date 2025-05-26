import "./styles.scss";
import { currentTasks } from "../..";
import { task } from "../types/taskType";
import { Validator } from "../../validator";
import { Calendar } from "../../calendar";

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

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");

  const inputDate = document.createElement("input");
  inputDate.type = "text";
  inputDate.placeholder = "MM/DD/YYYY";
  inputDate.required = true;
  inputDate.readOnly = true;

  const calendarButton = document.createElement("button");
  calendarButton.textContent = "📅";
  calendarButton.classList.add("calendar-button");
  calendarButton.type = "button";

  const calendarPopup = document.createElement("div");
  calendarPopup.classList.add("calendar-popup", "hidden");

  let currentMonth = Calendar.getCurrentMonth().month;
  let currentYear = Calendar.getCurrentMonth().year;
  let selectedDate: Date | null = null;

  const renderCalendar = (month: number, year: number) => {
    calendarPopup.innerHTML = "";

    const calendar = new Calendar(year, month);
    const today = new Date();

    const navContainer = document.createElement("div");
    navContainer.className = "calendar-nav-container";

    const prevButton = document.createElement("button");
    prevButton.className = "calendar-nav prev";
    prevButton.innerHTML = "&lt;";
    prevButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentMonth === 1) {
        currentMonth = 12;
        currentYear--;
      } else {
        currentMonth--;
      }
      renderCalendar(currentMonth, currentYear);
    });

    const nextButton = document.createElement("button");
    nextButton.className = "calendar-nav next";
    nextButton.innerHTML = "&gt;";
    nextButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentMonth === 12) {
        currentMonth = 1;
        currentYear++;
      } else {
        currentMonth++;
      }
      renderCalendar(currentMonth, currentYear);
    });

    const monthYearDisplay = document.createElement("span");
    monthYearDisplay.className = "calendar-month-year";
    monthYearDisplay.textContent = `${calendar["months"][month - 1]} ${year}`;

    navContainer.appendChild(prevButton);
    navContainer.appendChild(monthYearDisplay);
    navContainer.appendChild(nextButton);
    calendarPopup.appendChild(navContainer);

    const calendarElement = calendar.draw();
    calendarPopup.appendChild(calendarElement);

    const dayElements = calendarElement.querySelectorAll(".calendar-day:not(.empty)");
    dayElements.forEach((dayElement) => {
      const day = parseInt((dayElement as HTMLElement).dataset.day || "0");
      const month = parseInt((dayElement as HTMLElement).dataset.month || "0");
      const year = parseInt((dayElement as HTMLElement).dataset.year || "0");
      const date = new Date(year, month - 1, day);

      if (date.toDateString() === today.toDateString()) {
        dayElement.classList.add("today");
      }

      if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
        dayElement.classList.add("selected");
      }

      dayElement.addEventListener("click", (e) => {
        e.stopPropagation();

        selectedDate = date;
        const formattedDate = `${month}/${day}/${year}`;
        inputDate.value = formattedDate;
        calendarPopup.classList.add("hidden");
        inputDate.classList.remove("error-field");

        renderCalendar(currentMonth, currentYear);
      });
    });
  };

  calendarButton.addEventListener("click", (e) => {
    e.stopPropagation();
    calendarPopup.classList.toggle("hidden");

    if (!calendarPopup.classList.contains("hidden")) {
      const current = Calendar.getCurrentMonth();
      currentMonth = current.month;
      currentYear = current.year;
      renderCalendar(currentMonth, currentYear);
    }
  });

  document.addEventListener("click", (e) => {
    if (!calendarPopup.contains(e.target as Node) && e.target !== calendarButton) {
      calendarPopup.classList.add("hidden");
    }
  });

  dateContainer.appendChild(inputDate);
  dateContainer.appendChild(calendarButton);
  dateContainer.appendChild(calendarPopup);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.required = true;

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main-info");
  mainInfo.appendChild(titleInput);
  mainInfo.appendChild(prioritySelection);
  mainInfo.appendChild(dateContainer);

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

    selectedDate = null;
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
  dateInput.value = "";
  descriptionInput.value = "";
};

const addToLocaleStorage = (task: task): void => {
  const tmp = JSON.parse(localStorage.getItem("toDoTasks") as string) || [];
  tmp.push(task);
  localStorage.setItem("toDoTasks", JSON.stringify(tmp));
};

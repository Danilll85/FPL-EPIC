import { useState } from "react";
import "./InputNote.scss";
import { convertDate } from "../../utils/convertDate";

type propTypes = {
  day: string;
  month: string;
  year: string;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputNote = ({ day, month, year, setModalOn }: propTypes) => {
  const [titleText, setTitleText] = useState("");
  const [descText, setDescText] = useState("");

  //console.log(day, month, year);

  const isTextAreaEvent = (
    e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
  ): e is React.ChangeEvent<HTMLTextAreaElement> => {
    return "rows" in e.target;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    if (isTextAreaEvent(e)) {
      setDescText(e.target.value);
    } else {
      setTitleText(e.target.value);
    }
  };

  const hideModal = () => {
    setModalOn(false);
  };

  const saveNote = () => {
    if (!titleText.trim()) {
      alert("Input title!!!");
    }
    const date = convertDate(day, month, year);
    const notes = localStorage.getItem(date);

    if (notes) {
      const tmp: object[] = JSON.parse(notes);
      tmp.push({ title: titleText, description: descText });

      localStorage.setItem(date, JSON.stringify(tmp));
    } else {
      localStorage.setItem(date, JSON.stringify([{ title: titleText, description: descText }]));
    }

    setTitleText("");
    setDescText("");
    hideModal();
  };

  return (
    <div className="input-wrapper" draggable={true}>
      <button id="close-btn" onClick={hideModal}>
        x
      </button>
      <h3>Add Note</h3>
      <input type="text" placeholder="add title" onChange={handleChange} value={titleText} />
      <textarea placeholder="add description" onChange={handleChange} value={descText} />
      <button id="save-btn" onClick={saveNote}>
        Save
      </button>
    </div>
  );
};

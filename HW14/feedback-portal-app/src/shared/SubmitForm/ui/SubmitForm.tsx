import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/providers/store/store";
import { addFeedback } from "../../../app/providers/store/slices/feedback.slice";
import { useFetch } from "../lib/useFetch";
import { useEffect } from "react";

type DataType = {
  message: string;
  department: string;
};

const commonFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "0.5rem",
};

const commonLabelStyle = {
  fontSize: "1.5rem",
};

const commonInputStyle = {
  padding: "0.5rem 10rem 0.5rem 0.5rem",
  border: "1px solid black",
  borderRadius: "10px",
};

const commonBtnStyle = {
  background: "none",
  border: "1px solid black",
  borderRadius: "10px",
  paddingInline: "2rem",
  paddingBlock: "1rem",
  fontSize: "0.8rem",
  cursor: "pointer",
};

export const SubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useFetch();

  const onSubmit = async (data: any) => {
    if (data) {
      data.createdAt = new Date().toISOString().split("T")[0];
      dispatch(addFeedback(data));
    }
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ ...commonFormStyle, marginBottom: "1rem" }}>
        <label style={commonLabelStyle} htmlFor="message">
          Message
        </label>
        <input
          style={commonInputStyle}
          id="message"
          {...register("message", { required: true })}
          placeholder="Enter your feedback"
        />
        {errors.message && <div>This field is required</div>}
        <style>
          {`
            ::placeholder {
              font-size: 1rem;
            }`}
        </style>
      </div>
      <div style={{ display: "flex", alignItems: "end", gap: "1rem" }}>
        <div style={commonFormStyle}>
          <label htmlFor="department" style={commonLabelStyle}>
            Department
          </label>
          <select
            id="department"
            {...register("department", { required: true })}
            style={{ ...commonInputStyle, background: "white" }}
          >
            <option value="">Select department</option>
            {data &&
              data.map((elem) => {
                return (
                  <option key={elem.id} value={elem.title}>
                    {elem.title}
                  </option>
                );
              })}
          </select>
        </div>
        <button style={commonBtnStyle}>Submit Feedback</button>
      </div>
    </form>
  );
};

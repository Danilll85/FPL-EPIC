import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../app/providers/store/store";
import { addFeedback, type Feedback } from "../../../app/providers/store/slices/feedback.slice";
import { useEffect } from "react";
import {
  fetchDepartments,
  selectDepartments,
  selectDepartmentsLoading,
} from "../../../app/providers/store/slices/departments.slice";
import { v4 as uuidv4 } from "uuid";

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
  const departments = useSelector(selectDepartments);
  const loading = useSelector(selectDepartmentsLoading);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const onSubmit = async (data: DataType) => {
    const feedbackData: Feedback = {
      id: uuidv4(),
      message: data.message,
      department: data.department,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };
    dispatch(addFeedback(feedbackData));
  };

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
            disabled={loading}
          >
            <option value="">Select department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.title}>
                {dept.title}
              </option>
            ))}
          </select>
        </div>
        <button style={commonBtnStyle}>Submit Feedback</button>
      </div>
    </form>
  );
};

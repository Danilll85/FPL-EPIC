import { useForm } from "react-hook-form";

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
  border: '1px solid black',
  borderRadius: '10px',
  paddingInline: '2rem',
  paddingBlock: '1rem',
  fontSize: '0.8rem',
  cursor: 'pointer',
};

export const SubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = async (data: any) => {
    console.log(data);
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
      <div style={{ display: "flex", alignItems: 'end', gap: "1rem" }}>
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
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Product">Product</option>
          </select>
        </div>
        <button style={commonBtnStyle}>Submit Feedback</button>
      </div>
    </form>
  );
};
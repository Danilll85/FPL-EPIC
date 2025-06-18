import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../context";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const context = useContext(Context);

  const onSubmit = (data: any) => {
    console.log('click save btn');
    console.log(context.state);
    
    console.log({ data, errors });
  };

/*
to-do:
initialValues and prefiled fields
*/

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        width: "100%",
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: "100%", marginBottom: "1.5rem", paddingRight: '1.5rem' }}>
        <div style={{ width: '100%', marginBottom: "1rem" }}>
          <input
            {...register("title", { required: true })}
            placeholder="Title"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: `1px solid ${errors.title ? "#ff4d4f" : "#d9d9d9"}`,
              borderRadius: "4px",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.3s",
            }}
          />
          {errors.title && (
            <div style={{ color: "#ff4d4f", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              This field is required
            </div>
          )}
        </div>
        <div style={{ width: '100%', marginBottom: "1rem" }}>
          <input
            {...register("note", { required: true })}
            placeholder="Note"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: `1px solid ${errors.note ? "#ff4d4f" : "#d9d9d9"}`,
              borderRadius: "4px",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.3s",
            }}
          />
          {errors.note && (
            <div style={{ color: "#ff4d4f", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              This field is required
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        style={{
          padding: "0.75rem",
          backgroundColor: "#009788",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s",
          width: "100%",
        }}
      >
        Save
      </button>
    </form>
  );
};
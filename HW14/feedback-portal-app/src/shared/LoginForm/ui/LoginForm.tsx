import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ outline: "1px solid black", borderRadius: "10px", width: "500px", height: "500px" }}>
        <label htmlFor="">username</label>
        <input {...register("username")} placeholder="Enter username" />
      </div>

      <button>Login</button>
    </form>
  );
};

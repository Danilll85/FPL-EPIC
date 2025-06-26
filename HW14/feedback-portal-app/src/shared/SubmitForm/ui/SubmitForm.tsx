import { useForm } from "react-hook-form";

type DataType = {
  message: string;
  department: string;
};

export const SubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = async (data: any) => {
    //some logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("message", { required: true })} placeholder="Enter your feedback" />
        {errors.message && <div>This field is required</div>}
      </div>
    </form>
  );
};

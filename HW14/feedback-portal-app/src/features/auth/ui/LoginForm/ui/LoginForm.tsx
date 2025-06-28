import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../../app/providers/store/store";
import { setAuth } from "../../../../../app/providers/store/slices/auth.slice";
import { FormContainer, InputGroup, Input, SubmitButton } from "./styles";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  showModal: Dispatch<SetStateAction<boolean>>;
}

export const LoginForm = ({ showModal }: Props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: any) => {
    console.log(data);
    showModal(false);
    dispatch(setAuth(true));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" {...register("username")} placeholder="Enter username" />
      </InputGroup>

      <SubmitButton type="submit">Login</SubmitButton>
    </FormContainer>
  );
};

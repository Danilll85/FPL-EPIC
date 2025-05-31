import { ILoginForm } from "./ILoginForm";

export interface ISignupForm extends ILoginForm {
  username: string;
  confirmPassword: string;
}

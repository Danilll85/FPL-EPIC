import { RequiredField } from "../../decorators/RequredField/requiredFiled";

export class User {
  @RequiredField
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

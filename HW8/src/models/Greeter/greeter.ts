import { Delay } from "../../decorators/Delay/delay";

export class Greeter {
  @Delay(3000)
  greet() {
    console.log("Hello after few seconds!");
  }
}

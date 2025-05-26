import { Greeter } from "./models/Greeter/greeter";
import { ProductComponent } from "./models/ProductComponent/productComponent";
import { User } from "./models/User/user";

//greeter and user classes log their output to the browser console
const productComponent = new ProductComponent();
const greeter = new Greeter();
greeter.greet();
const user = new User("");

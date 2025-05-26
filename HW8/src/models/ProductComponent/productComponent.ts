import { Component } from "../../decorators/Component/component";

@Component({
  selector: "app-product",
  template: "<h1>Product Component Loaded</h1>",
})
export class ProductComponent {
  constructor() {
    console.log("ProductComponent created");
  }
}
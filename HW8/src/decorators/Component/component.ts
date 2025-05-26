type ComponentConfig = {
  selector: string;
  template: string;
  containerId?: string;
};

export function Component(config: ComponentConfig) {
  return function <T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
      static readonly selector = config.selector;
      static readonly template = config.template;

      constructor(...args: any[]) {
        super(...args);

        const containerId = config.containerId || "product-component-block";
        const container = document.getElementById(containerId);

        const DOMElement = document.createElement(config.selector);
        DOMElement.innerHTML = config.template;

        container?.appendChild(DOMElement);

        console.log(`Component ${config.selector} initialized`);
      }
    };
  };
}

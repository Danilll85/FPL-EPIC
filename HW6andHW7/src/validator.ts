export class Validator {
  private errorBlock: HTMLElement;
  private inputs: (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];
  private errorInputClass: string;

  constructor(errorBlock: HTMLElement, errorInputClass: string = "input-error") {
    this.errorBlock = errorBlock;
    this.inputs = [];
    this.errorInputClass = errorInputClass;
  }

  addInput(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    input.addEventListener("input", () => {
      this.clearInputError(input);
    });

    input.addEventListener("change", () => {
      this.clearInputError(input);
    });

    this.inputs.push(input);
  }

  validateAll(): boolean {
    this.clearAllErrors();
    let isValid = true;

    for (const input of this.inputs) {
      if (input.required && !input.value.trim()) {
        this.markInputAsInvalid(input);
        isValid = false;
      }
    }

    if (!isValid) {
      this.showError("Please fill in all required fields");
    }

    return isValid;
  }

  private markInputAsInvalid(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    input.classList.add(this.errorInputClass);
  }

  private clearInputError(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    input.classList.remove(this.errorInputClass);
    this.errorBlock.textContent = "";
  }

  private clearAllErrors() {
    this.inputs.forEach((input) => {
      this.clearInputError(input);
    });
    this.errorBlock.textContent = "";
  }

  private showError(message: string) {
    this.errorBlock.textContent = message;
  }
}

export function RequiredField(target: any, context: ClassFieldDecoratorContext) {
  return function (this: any, value: string) {
    if (!value) {
      throw new Error(`Output: Validation failed: ${context.name.toString()} is required`);
    }

    return value;
  };
}

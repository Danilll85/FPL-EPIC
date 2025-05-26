export function Delay(ms: number) {
  return function (target: any, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {
      return new Promise((res) => {
        setTimeout(() => {            
          res(target.apply(this, args));
        }, ms);
      });
    };
  };
}

export const mergeObjects = <T extends object, U extends object>(a: T, b: U): T & U => {
  return { ...a, ...b };
};

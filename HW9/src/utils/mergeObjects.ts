export const mergeObjects = <T extends object, U extends object>(a: T, b: U): T & U => {
  return Object.entries(b).reduce(
    (acc, [key, value]) => {
      const typedKey = key as keyof (T & U); 

      if (typeof value === "object" && value !== null && key in acc) {
        if (typeof acc[typedKey] === "object" && acc[typedKey] !== null) {
          acc[typedKey] = mergeObjects(acc[typedKey] as object, value as object) as any;
        } else {
          acc[typedKey] = value as any;
        }
      } else {
        acc[typedKey] = value;
      }
      return acc;
    },
    { ...a } as T & U
  );
};

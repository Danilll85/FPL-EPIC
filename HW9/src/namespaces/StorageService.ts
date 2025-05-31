export namespace StorageService {
  export const setItem = (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.error("LocalStorage setItem error:", e);
      return false;
    }
  };

  export const getItem = (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error("LocalStorage getItem error:", e);
      return null;
    }
  };

  export const clear = (): boolean => {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      console.error("LocalStorage clear error:", e);
      return false;
    }
  };

  export const setObject = <T extends object>(key: string, value: T): boolean => {
    try {
      const json = JSON.stringify(value);
      return setItem(key, json);
    } catch (e) {
      console.error("Stringify error:", e);
      return false;
    }
  };

  export const getObject = <T>(key: string): T | null => {
    try {
      const item = getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (e) {
      console.error("Parse error:", e);
      return null;
    }
  };
}

type LocalStorageProps = (key: string, defaultValue: any) => any;

/**
 * A custom hook to get data from local storage with a getter and setter
 * @returns {Function} - getStoredValue(key, defaultValue) - A getter function
 * @returns {Function} - setStoredValue - A setter function
 * @example 
 * const { getStoredValue, setStoredValue } = useLocalStorage();
 * const storedValue = getStoredValue('key', defaultValue);
 * setStoredValue('key', value);
 */

const useLocalStorage = () => {
  /**
   * Getter function to get a stored value from local storage
   * @param key 
   * @param defaultValue 
   * @returns the stored value or the default value
   * @example 
   * const { getStoredValue, setStoredValue } = useLocalStorage();
   * const storedValue = getStoredValue('key', defaultValue);
   */
  const getStoredValue: LocalStorageProps = (key, defaultValue) => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
      return defaultValue;
    }
    catch (error) {
      return defaultValue;
    }
  };

  /**
   * Setter function to set a value in local storage
   * @param key 
   * @param value 
   * @example 
   * const { getStoredValue, setStoredValue } = useLocalStorage();
   * setStoredValue('key', value);
   */
  const setStoredValue: LocalStorageProps = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      console.error(error);
    }
  };
  return { getStoredValue, setStoredValue };
}

export default useLocalStorage;
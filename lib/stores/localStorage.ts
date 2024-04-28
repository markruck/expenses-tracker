// A custom hook to get data from local storage with a getter and setter

const useLocalStorage = () => {
  // Get the stored value from local storage
  const getStoredValue = (key, defaultValue) => {
    try {
      // Get the stored value
      const storedValue = localStorage.getItem(key);
      // If the stored value is not null, return it
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
      // If the stored value is null, return the initial value
      return defaultValue;
    }
    catch (error) {
      // If there is an error, return the initial value
      return defaultValue;
    }
  };
  // Set the stored value in local storage
  const setStoredValue = (key: string, value: any) => {
    try {
      // Set the value in local storage
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      // Log the error
      console.error(error);
    }
  };
  return { getStoredValue, setStoredValue };
}

export default useLocalStorage;
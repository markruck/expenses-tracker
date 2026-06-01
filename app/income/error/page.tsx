"use client";

import { useEffect, useState } from "react";

/**
 * Error page to throw an error in the income route.
 * @example
 * <ErrorPage />
 * @returns {React.Component} The ErrorPage component
 */

const ErrorPage = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  useEffect(() => {
    setShouldThrow(true);
  }, []);

  if (shouldThrow) {
    throw new Error("This is a test error in the income route.");
  }

  return null;
}

export default ErrorPage;

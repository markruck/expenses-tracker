/**
 * Error page to throw an error in the income route.
 * @example
 * <ErrorPage />
 * @returns {React.Component} The ErrorPage component
 */

const ErrorPage = () => {
  throw new Error("This is a test error in the income route.");
}

export default ErrorPage;
'use client'

/**
 * ErrorPage component for the app route
 * @example
 * <ErrorPage />
 * @returns {React.Component} The ErrorPage component
 */

const ErrorPage = () => {
  throw new Error('This is a test error in the app route.')
}

export default ErrorPage;
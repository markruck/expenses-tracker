/**
 * FormErrorMessage component
 * @param error - The error message to display
 * @returns A div with the error message
 * @example
 * <FormErrorMessage error="This field cannot be blank" />
 * @example
 * <FormErrorMessage error="Invalid type provided for this field" />
 */

const FormErrorMessage = ({ error }: { error: string }) => {
  return <div className="text-red-500 text-sm text-right">{error}</div>;
}

export default FormErrorMessage;
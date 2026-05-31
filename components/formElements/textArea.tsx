import FormErrorMessage from "./formErrorMessage";

type FormTextAreaProps = {
  error: string[];
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * FormTextArea component
 * @param {FormTextAreaProps} props - The textarea props
 * @param {string[]} props.name - The name of the textarea
 * @param {string[]} props.error - An array of error messages
 * @example
 * <FormTextArea />
 */

const FormTextArea = (props: FormTextAreaProps) => {
  return (
    <>
      <div className="flex space-between align-center">
        <textarea {...props} />
      </div>
      {props.error.map((error, index) => <FormErrorMessage key={`${props.name}_error_${index}`} error={error} />)}
    </>
  )
}

export default FormTextArea;
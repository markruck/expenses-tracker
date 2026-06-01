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
  const { error, ...textAreaProps } = props;

  return (
    <>
      <div className="flex space-between align-center">
        <textarea {...textAreaProps} />
      </div>
      {error.map((message, index) => <FormErrorMessage key={`${props.name}_error_${index}`} error={message} />)}
    </>
  )
}

export default FormTextArea;

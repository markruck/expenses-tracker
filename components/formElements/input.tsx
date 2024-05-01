import FormErrorMessage from "./formErrorMessage";

type FormInputProps = {
  error: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * FormInput component
 * @param {FormInputProps} props - The input props
 * @param {string[]} props.name - The name of the input
 * @param {string[]} props.error - An array of error messages
 * @example
 * <FormInput />
 */

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <div className="flex space-between align-center">
        <input {...props} />
      </div>
      {props.error.map((error, index) => <FormErrorMessage key={`${props.name}_error_${index}`} error={error} />)}
    </>
  )
}

export default FormInput;
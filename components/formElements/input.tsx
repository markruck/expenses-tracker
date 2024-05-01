import FormErrorMessage from "./formErrorMessage";

type FormInputProps = {
  error: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

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
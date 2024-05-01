import FormErrorMessage from "./formErrorMessage";

type FormTextAreaProps = {
  error: string[];
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

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
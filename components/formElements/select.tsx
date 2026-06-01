import FormErrorMessage from "./formErrorMessage";

type FormSelectProps = {
  options: React.OptionHTMLAttributes<HTMLOptionElement>[];
  error?: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

/**
 * FormSelect component
 * @param {FormSelectProps} props - The select props
 * @param {string[]} props.name - The name of the select
 * @param {string[]} props.error - An array of error messages
 * @example
 * <FormSelect />
 */

const FormSelect = (props: FormSelectProps) => {
  const { options, error, ...selectProps } = props;
  return (
    <>
      <div className="flex space-between align-center">
        <select {...selectProps} >
          {options.map((option, index) => {
            const { label, ...optionProps } = option;
            return <option key={`option_${index}`} {...optionProps}>{label}</option>
          })}
        </select>
      </div>
      {error?.map((error, index) => <FormErrorMessage key={`${props.name}_error_${index}`} error={error} />)}
    </>
  )
}

export default FormSelect;
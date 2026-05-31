import React from "react";
import { ZodError, z } from "zod";

type ValidationError = {
  path: PropertyKey[];
  message: string;
};

type ValidationResult =
  | { success: true; errors: [] }
  | { success: false; errors: ValidationError[] };

/**
 * A hook to validate a form using zod
 * @param schema - A zod schema to validate the form
 * @returns An object with errors, findErrors and validate
 * @example
 * const { errors, findErrors, validate } = useValdateForm(IncomeFormSchema);
 * @see IncomeForm
 * @see ExpensesForm
 */
export const useValdateForm = (schema: z.ZodType<any, any>) => {
  const [errors, setErrors] = React.useState<ValidationError[]>([]);

  const findErrors = (fieldName: string, currentErrors = errors) => {
    return currentErrors.filter((item) => {
      return item.path.includes(fieldName);
    }).map((item) => item.message);
  };

  const handleZodError = (error: z.ZodError<any>) => {
    const errors = error.issues.map((err) => {
      return {
        path: err.path,
        message: err.message,
      };
    });

    setErrors(errors);
    return errors;
  }

  const validate = (data: any): ValidationResult => {
    try {
      schema.parse(data);
      setErrors([]);
      return { success: true, errors: [] };
    } catch (error) {
      if (error instanceof ZodError) {
        return { success: false, errors: handleZodError(error) };
      }
      return { success: false, errors: [] };
    }
  }

  return {
    errors,
    findErrors,
    validate,
  }
}

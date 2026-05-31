import React from "react";
import { ZodError, z } from "zod";

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
  const [errors, setErrors] = React.useState<{ path: (string | number)[]; message: string; }[]>([]);

  const findErrors = (fieldName: string) => {
    return errors.filter((item) => {
      return item.path.includes(fieldName);
    }).map((item) => item.message);
  };

  const handleZodError = (error: z.ZodError<any>) => {
    const errors = error.errors.map((err) => {
      return {
        path: err.path,
        message: err.message,
      };
    });

    setErrors(errors);
  }

  const validate = (data: any) => {
    try {
      schema.parse(data);
      setErrors([]);
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        handleZodError(error);
      }
      return false;
    }
  }

  return {
    errors,
    findErrors,
    validate,
  }
}
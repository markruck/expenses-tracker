"use client";
import React, { SyntheticEvent } from "react";
import { z } from "zod";
import { useExpensesStore } from "@lib/stores/expensesStore";
import CategorieSelector from "../categorieSelector";
import { useValidateForm } from "../../lib/useValidateForm";
import ExpensesFormHeader from "./expensesFormHeader";
import { useSearchParams } from "next/navigation";
import FormInput from "../formElements/input";
import FormTextArea from "../formElements/textArea";
import { formatDateInputValue, parseDateInputValue } from "@lib/utils";

const ExpensesFormSchema = z.object({
  date: z.date().refine((date) => !Number.isNaN(date.getTime()), {
    message: "Please enter a valid date",
  }),
  amount: z.coerce.number().positive(),
  category: z.string().min(1),
  description: z.string(),
});

/**
 * A collapsible form to add new expenses
 * @example
 * <ExpensesForm />
 * @see ExpensesFormSchema A schema is needed in the component
 */

const ExpensesForm = () => {
  const searchParams = useSearchParams();
  const shouldShowForm = searchParams.get("showForm") === "true" || false;

  const { findErrors, validate } = useValidateForm(ExpensesFormSchema);
  const { addExpense } = useExpensesStore();
  const [showForm, setShowForm] = React.useState(shouldShowForm);
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState<number | string>("");
  const [category, setCategory] = React.useState<string>("");
  const [description, setDescription] = React.useState("");

  const [dateError, setDateError] = React.useState<string[]>([]);
  const [amountError, setAmountError] = React.useState<string[]>([]);
  const [categoryError, setCategoryError] = React.useState<string[]>([]);
  const [descriptionError, setDescriptionError] = React.useState<string[]>([]);

  const resetForm = () => {
    setAmount("");
    setCategory("");
    setDescription("");
    setDateError([]);
    setAmountError([]);
    setCategoryError([]);
    setDescriptionError([]);
    setShowForm(false);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const validation = validate({ date, amount, category, description });
    if (!validation.success) {
      setDateError(findErrors("date", validation.errors));
      setAmountError(findErrors("amount", validation.errors));
      setCategoryError(findErrors("category", validation.errors));
      setDescriptionError(findErrors("description", validation.errors));
      return;
    }
    addExpense({ date, amount: amount as number, category, description });
    resetForm();
  };

  return (
    <div className="margin-1-0">
      <ExpensesFormHeader setShowForm={() => setShowForm(true)} />

      {showForm ? (
        <form
          className="form-overlay"
          onSubmit={handleSubmit}
          onClick={(e) => {
            resetForm();
          }}
        >
          <div
            className="form-overlay-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2 className="text-center form-overlay-title">Add new Expense</h2>
            <FormInput
              type="date"
              name="date"
              required={true}
              value={formatDateInputValue(date)}
              onChange={(e) => {
                setDate(parseDateInputValue(e.target.value));
              }}
              error={dateError}
            />

            <FormInput
              placeholder="Amount"
              type="number"
              name="amount"
              required={true}
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value === "" ? "" : e.target.valueAsNumber);
              }}
              error={amountError}
            />

            <CategorieSelector
              category={category}
              setCategory={setCategory}
              row
              error={categoryError}
            />

            <FormTextArea
              name="description"
              placeholder="Enter a brief description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              error={descriptionError}
            />

            <div className="flex flex-1 justify-center margin-1-0">
              <button
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default ExpensesForm;

'use client'
import React, { SyntheticEvent } from "react";
import { z } from "zod";
import { useExpensesStore } from "@/lib/stores/expensesStore";
import CategoriesSelector from "../categorieSelector";
import { useValdateForm } from "../../lib/useValdateForm";
import FormErrorMessage from "../ui/formErrorMessage";
import ExpensesFormHeader from "./expensesFormHeader";
import { useSearchParams } from "next/navigation";


const invalid_type_error = 'Invalid type provided for this field';
const required_error = 'This field cannot be blank';

/**
 * A collapsible form to add new expenses
 * @example
 * <ExpensesForm />
 */

const ExpensesFormSchema = z.object({
  amount: z.coerce.number({ invalid_type_error, required_error }).positive(),
  category: z.string({ invalid_type_error: 'Invalid type provided for this field' }),
  description: z.string({ invalid_type_error: 'Invalid type provided for this field' }),
});

const ExpensesForm = () => {
  const searchParams = useSearchParams()
  const shouldShowForm = searchParams.get('showForm') === 'true' || false;

  const { findErrors, validate } = useValdateForm(ExpensesFormSchema);
  const { addExpense } = useExpensesStore();
  const [showForm, setShowForm] = React.useState(shouldShowForm);
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState<number | string>('');
  const [category, setCategory] = React.useState<string>('all');
  const [description, setDescription] = React.useState('');

  const [dateError, setDateError] = React.useState<string[]>([]);
  const [amountError, setAmountError] = React.useState<string[]>([]);
  const [descriptionError, setDescriptionError] = React.useState<string[]>([]);

  const resetForm = () => {
    setAmount('');
    setCategory('all');
    setDescription('');
    setDateError([]);
    setAmountError([]);
    setDescriptionError([]);
    setShowForm(false)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validate({ date, amount, category, description })) {
      setDateError(findErrors('date'));
      setAmountError(findErrors('amount'));
      setDescriptionError(findErrors('description'));
      return;
    }
    addExpense({ date, amount: amount as number, category, description });
    resetForm();

  }

  return (
    <div className="margin-1-0">
      <ExpensesFormHeader setShowForm={() => setShowForm(true)} />

      {showForm ? <form className="form-overlay" onSubmit={handleSubmit} onClick={(e) => {
        resetForm()
      }}>
        <div className="form-overlay-content" onClick={(e) => { e.stopPropagation() }}>
          <h2 className="text-center form-overlay-title">Add new Expense</h2>
          <div className="flex space-between align-center">
            <input placeholder="Enter a date" type="date" id="date" name="date" required={true} value={date.toISOString().substring(0, 10)} onChange={(e) => { setDate(new Date(e.target.value)) }} />
          </div>
          {dateError.map((error, index) => <FormErrorMessage key={`dateError_${index}`} error={error} />)}

          <div className="flex space-between align-center">
            <input placeholder="Amount" type="number" id="amount" name="amount" required={true} value={amount} onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
          </div>
          {amountError.map((error, index) => <FormErrorMessage key={`amountError_${index}`} error={error} />)}

          <CategoriesSelector category={category} setCategory={setCategory} row />

          <div className="flex space-between align-center">
            <textarea placeholder="Enter a breif description" id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </div>
          {descriptionError.map((error, index) => <FormErrorMessage key={`descriptionError_${index}`} error={error} />)}

          <div className="flex flex-1 justify-center margin-1-0">
            <button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add</button>
          </div>
        </div>
      </form> : null}
    </div>
  );
}

export default ExpensesForm;
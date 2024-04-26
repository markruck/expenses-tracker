'use client'
import React, { SyntheticEvent } from "react";
import { useExpensesStore } from "@/lib/stores/expensesStore";

const ExpensesForm = () => {
  const { addExpense } = useExpensesStore();
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState(0);
  const [type, setType] = React.useState('main');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addExpense({ date, amount, type, description });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="income">Date</label>
        <input type="date" id="date" name="date" onChange={(e) => { setDate(new Date(e.target.value)) }} />
        <label htmlFor="income">Amount</label>
        <input type="number" id="amount" name="amount" onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
        <label htmlFor="income">Type</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="null">Select</option>
          <option value="groceries">Groceries</option>
          <option value="auto">Auto</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" onChange={(e) => { setDescription(e.target.value) }} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpensesForm;
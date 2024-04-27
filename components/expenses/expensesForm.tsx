'use client'
import React, { SyntheticEvent } from "react";
import { useExpensesStore } from "@/lib/stores/expensesStore";
import CategoriesSelector from "../categorieSelector";
import styles from "./expensesForm.module.css";
import Image from "next/image";

const ExpensesForm = () => {
  const { addExpense } = useExpensesStore();
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState<number | string>('');
  const [category, setCategory] = React.useState<string>('all');
  const [description, setDescription] = React.useState('');
  const [showForm, setShowForm] = React.useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!date || !amount || !category || category === 'all') {
      alert('Please fill all required fields.');
      return;
    }
    addExpense({ date, amount: amount as number, category, description });
    setAmount('')
    setCategory('all')
    setDescription('')
  }

  return (
    <div className="margin-1-0">
      <div className="flex flex-1 space-between align-center margin-1-0">
        <h1>Expenses</h1>
        <div className="cursor-pointer" onClick={() => setShowForm(!showForm)}>{showForm ? <Image alt="Close" title="Close" className={styles.icon} src="/assets/images/minus-outline-icon.svg" width={24} height={24} /> : <Image alt="Add new income" title="Add new expense" className={styles.icon} src="/assets/images/addition-color-outline-icon.svg" width={24} height={24} />}</div>
      </div>

      {showForm ? <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className="text-center">Add new Expense</h2>
        <div className="flex space-between align-center">
          <label htmlFor="income">Date</label>
          <input type="date" id="date" name="date" required={true} value={date.toISOString().substring(0, 10)} onChange={(e) => { setDate(new Date(e.target.value)) }} />
        </div>
        <div className="flex space-between align-center">
          <label htmlFor="income">Amount</label>
          <input type="number" id="amount" name="amount" required={true} value={amount} onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
        </div>
        <CategoriesSelector category={category} setCategory={setCategory} row withLabel />
        <div className="flex space-between align-center">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
        </div>
        <div className="flex flex-1 justify-center">
          <button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add</button>
        </div>
      </form> : null}
    </div>
  );
}

export default ExpensesForm;
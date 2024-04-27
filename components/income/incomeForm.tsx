'use client'
import React, { SyntheticEvent } from "react";
import { useIncomeStore } from "../../lib/stores/incomeStore";
import styles from "./incomeForm.module.css";

const IncomeForm = () => {
    const { addIncome } = useIncomeStore();
    const [amount, setAmount] = React.useState<number | string>('');
    const [type, setType] = React.useState('default');
    const [description, setDescription] = React.useState('');

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        addIncome({ amount: amount as number, type, description });
        setAmount('')
        setType('default')
        setDescription('')
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className="text-center">Add new Income</h2>
                <div className="flex space-between align-center">
                    <label htmlFor="income">Amount</label>
                    <input type="number" id="amount" name="amount" value={amount} onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
                </div>
                <div className="flex space-between align-center">
                    <label htmlFor="income">Type</label>
                    <select onChange={(e) => setType(e.target.value)} value={type}>
                        <option value="default">Select</option>
                        <option value="main">Main</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex space-between align-center">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div className="flex flex-1 justify-center">
                    <button type="submit" className="flex-1">Add</button>
                </div>
            </form>
        </div>
    );
}

export default IncomeForm;
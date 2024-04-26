'use client'
import React, { SyntheticEvent } from "react";
import { useIncomeStore } from "../../lib/stores/incomeStore";

const IncomeForm = () => {
    const { addIncome } = useIncomeStore();
    const [amount, setAmount] = React.useState(0);
    const [type, setType] = React.useState('main');
    const [description, setDescription] = React.useState('');

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        addIncome({ amount, type, description });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="income">Amount</label>
                <input type="number" id="amount" name="amount" onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
                <label htmlFor="income">Type</label>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="null">Select</option>
                    <option value="main">Main</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" onChange={(e) => { setDescription(e.target.value) }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default IncomeForm;
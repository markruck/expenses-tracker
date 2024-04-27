'use client'
import React, { SyntheticEvent } from "react";
import { useIncomeStore } from "../../lib/stores/incomeStore";
import styles from "./incomeForm.module.css";
import Image from "next/image";

const IncomeForm = () => {
    const { addIncome } = useIncomeStore();
    const [amount, setAmount] = React.useState<number | string>('');
    const [type, setType] = React.useState('default');
    const [description, setDescription] = React.useState('');
    const [showForm, setShowForm] = React.useState(false);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!amount || !type || type === 'default') {
            alert('Please fill all required fields.');
            return;
        }

        addIncome({ amount: amount as number, type, description });
        setAmount('')
        setType('default')
        setDescription('')
    }

    return (
        <div>
            <div className="flex flex-1 space-between align-center margin-1-0">
                <h1>Income</h1>
                <div>
                    <div className="pointer" onClick={() => setShowForm(!showForm)}>{showForm ? <Image alt="Add new income" title="Add new income" className={styles.icon} src="/assets/images/minus-outline-icon.svg" width={24} height={24} /> : <Image alt="Add new income" title="Add new income" className={styles.icon} src="/assets/images/addition-color-outline-icon.svg" width={24} height={24} />}</div>
                </div>
            </div>
            {showForm ? <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className="text-center">Add new Income</h2>
                <div className="flex space-between align-center">
                    <label htmlFor="income">Amount</label>
                    <input type="number" id="amount" name="amount" value={amount} required onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
                </div>
                <div className="flex space-between align-center">
                    <label htmlFor="income">Type</label>
                    <select onChange={(e) => setType(e.target.value)} required value={type}>
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
            </form> : null}
        </div>
    );
}

export default IncomeForm;
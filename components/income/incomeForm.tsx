'use client'
import React, { SyntheticEvent } from "react";
import { useIncomeStore } from "../../lib/stores/incomeStore";
import styles from "./incomeForm.module.css";;
import { z } from "zod";
import FormErrorMessage from "../ui/formErrorMessage";
import { useValdateForm } from "../../lib/useValdateForm";
import IncomeFormHeader from "./incomeFormHeader";

const invalid_type_error = 'Invalid type provided for this field';
const required_error = 'This field cannot be blank';

/**
 * A schema to validate the income form
 */
const IncomeFormSchema = z.object({
    amount: z.coerce.number({ invalid_type_error, required_error }).positive(),
    type: z.enum(['main', 'other'], { invalid_type_error, required_error }),
    description: z.string({ invalid_type_error }),
});

/**
 * A form to add new income
 * @example
 * <IncomeForm />
 * @see IncomeFormHeader
 * @see FormErrorMessage
 * @see useValdateForm
 */
const IncomeForm = () => {
    const { findErrors, validate } = useValdateForm(IncomeFormSchema);
    const { addIncome } = useIncomeStore();
    const [showForm, setShowForm] = React.useState(false);
    const [amount, setAmount] = React.useState<number | string>('');
    const [type, setType] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');

    const [amountError, setAmountError] = React.useState<string[]>([]);
    const [typeError, setTypeError] = React.useState<string[]>([]);
    const [descriptionError, setDescriptionError] = React.useState<string[]>([]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!validate({ amount, type, description })) {
            setAmountError(findErrors('amount'));
            setTypeError(findErrors('type'));
            setDescriptionError(findErrors('description'));
            return;
        }
        addIncome({ amount: amount as number, type, description });
        setAmount('');
        setType('');
        setDescription('');
        setAmountError([]);
        setTypeError([]);
        setDescriptionError([]);
    }

    return (
        <>
            <IncomeFormHeader showForm={showForm} setShowForm={() => setShowForm(!showForm)} />
            {!showForm
                ? null
                : <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className="text-center">Add new Income</h2>
                    <div className="flex space-between align-center">
                        <label htmlFor="income">Amount</label>
                        <input type="number" id="amount" name="amount" required value={amount} onChange={(e) => { setAmount(e.target.valueAsNumber) }} />
                    </div>
                    {amountError.map((error, index) => <FormErrorMessage key={`amountError_${index}`} error={error} />)}

                    <div className="flex space-between align-center">
                        <label htmlFor="income">Type</label>
                        <select name="type" onChange={(e) => setType(e.target.value)} required={true} defaultValue="" value={type}>
                            <option disabled value="">Select</option>
                            <option value="main">Main</option>
                            <option value="other">Other</option>
                            <option value="error">Error</option>
                        </select>
                    </div>
                    {typeError.map((error, index) => <FormErrorMessage key={`typeError_${index}`} error={error} />)}

                    <div className="flex space-between align-center">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    {descriptionError.map((error, index) => <FormErrorMessage key={`descriptionError_${index}`} error={error} />)}

                    < div className="flex flex-1 justify-center">
                        <button type="submit" className="flex-1 button">Add</button>
                    </div>
                </form>
            }
        </>
    );
}

export default IncomeForm;
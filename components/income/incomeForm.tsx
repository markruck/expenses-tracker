'use client'
import React, { SyntheticEvent } from "react";
import { useIncomeStore } from "../../lib/stores/incomeStore";
import { z } from "zod";
import { useValdateForm } from "../../lib/useValdateForm";
import IncomeFormHeader from "./incomeFormHeader";
import { useSearchParams } from 'next/navigation'
import FormInput from "../formElements/input";
import FormTextArea from "../formElements/textArea";
import FormSelect from "../formElements/select";

const invalid_type_error = 'Invalid type provided for this field';
const required_error = 'This field cannot be blank';

const IncomeFormSchema = z.object({
    amount: z.coerce.number({ invalid_type_error, required_error }).positive(),
    type: z.enum(['main', 'other'], { invalid_type_error, required_error }),
    description: z.string({ invalid_type_error }),
});

/**
 * A collapsible form to add new income
 * @example
 * <IncomeForm />
 * @see IncomeFormSchema A schema is needed in the component
 */
const IncomeForm = () => {
    const searchParams = useSearchParams()
    const shouldShowForm = searchParams.get('showForm') === 'true' || false;

    const { findErrors, validate } = useValdateForm(IncomeFormSchema);
    const { addIncome } = useIncomeStore();
    const [showForm, setShowForm] = React.useState(shouldShowForm);
    const [date, setDate] = React.useState(new Date());
    const [amount, setAmount] = React.useState<number | string>('');
    const [type, setType] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');

    const [dateError, setDateError] = React.useState<string[]>([]);
    const [amountError, setAmountError] = React.useState<string[]>([]);
    const [typeError, setTypeError] = React.useState<string[]>([]);
    const [descriptionError, setDescriptionError] = React.useState<string[]>([]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!validate({ amount, type, description })) {
            setDateError(findErrors('date'));
            setAmountError(findErrors('amount'));
            setTypeError(findErrors('type'));
            setDescriptionError(findErrors('description'));
            return;
        }
        addIncome({ date, amount: amount as number, type, description });
        resetForm();
    }

    const resetForm = () => {
        setAmount('');
        setType('');
        setDescription('');
        setAmountError([]);
        setTypeError([]);
        setDescriptionError([]);
        setShowForm(false)
    }

    return (
        <>
            <IncomeFormHeader setShowForm={() => setShowForm(!showForm)} />
            {!showForm
                ? null
                : <form className="form-overlay" onSubmit={handleSubmit} onClick={(e) => {
                    resetForm()
                }}>
                    <div className="form-overlay-content" onClick={(e) => { e.stopPropagation() }}>
                        <h2 className="text-center form-overlay-title">Add new Income</h2>
                        <FormInput
                            error={dateError}
                            type="date"
                            required={true}
                            value={date.toISOString().substring(0, 10)}
                            onChange={(e) => { setDate(new Date(e.target.value)) }} />

                        <FormInput
                            error={amountError}
                            placeholder="Amount"
                            type="number"
                            required
                            value={amount}
                            onChange={(e) => { setAmount(e.target.valueAsNumber) }} />

                        <FormSelect
                            name="type"
                            onChange={(e) => setType(e.target.value)}
                            required={true}
                            value={type}
                            options={[
                                { value: '', label: 'Select a type', disabled: true },
                                { value: 'main', label: 'Main' },
                                { value: 'other', label: 'Other' },
                                { value: 'error', label: 'Error' }
                            ]}
                            error={typeError}
                        />

                        <FormTextArea
                            error={descriptionError}
                            placeholder="Enter a breif description"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }} />

                        < div className="flex flex-1 justify-center">
                            <button type="submit" className="flex-1 button">Add</button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default IncomeForm;
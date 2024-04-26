// Get saved income entries from the income store
'use client'
import { useSignals } from "@preact/signals-react/runtime";
import { useIncomeStore } from "../../lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
// import { income } from "@/lib/stores/incomeStore";

const Income = () => {
    // useSignals();
    const { income, deleteIncome, totalIncome } = useIncomeStore();
    return (
        <div>
            {income.value.map((entry, index) => {
                return (
                    <div key={`income_${index}`}>
                        <div className="flex flex-row space-between">
                            <p className="capitalize">{entry.type} income:</p>
                            <p className="capitalize">{currencyFormatDE.format(entry.amount)}</p>
                        </div>
                        <div className="flex flex-row gap-05">
                            <p>Edit</p>
                            <button onClick={() => { deleteIncome(index) }}>Delete</button>
                        </div>
                    </div>
                )
            })}
            <p className="flex flex-end bold">Total Income: {currencyFormatDE.format(totalIncome)}</p>
        </div>
    );
}

export default Income;
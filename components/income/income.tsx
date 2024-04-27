// Get saved income entries from the income store
'use client'
import { useIncomeStore } from "../../lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
import styles from "./income.module.css";

const Income = () => {
    const { income, deleteIncome, totalIncome } = useIncomeStore();
    if (!income.value.length) {
        return (
            <div className="list-container">
                <p>No income entries</p>
            </div>
        )
    }
    return (
        <div className="list-container">
            {income.value.map((entry, index) => {
                return (
                    <div className="list-entry-container">
                        <div key={`income_${index}`} className={styles.entry}>
                            <p className="capitalize">{entry.type} income:</p>
                            <p className="font-size-small">{entry.description}</p>
                            <p style={{ gridColumnEnd: 'd' }}>{currencyFormatDE.format(entry.amount)}</p>

                        </div>
                        <div>
                            <button className="button button-danger button-tiny margin-0" onClick={() => { deleteIncome(index) }}>Delete</button>
                        </div>
                    </div>
                )
            })}
            <p className="flex flex-end bold margin-1-0">Total Income: {currencyFormatDE.format(totalIncome)}</p>
        </div>
    );
}

export default Income;
import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils"
import styles from "./expenses.module.css";

type ExpenseProps = {
  date: Date;
  category: string;
  description: string;
  amount: number;
  index: number;
}

const expense = ({ date, category, description, amount, index }: ExpenseProps) => {

  const { deleteExpense } = useExpensesStore();

  return (
    <div key={`income_${index}`} className="list-entry-container cursor-initial">
      <div className={styles.entry}>
        <p>{date.toLocaleDateString('de-DE')}</p>
        <p className="capitalize">{category}</p>
        <p className="font-size-small">{description}</p>
        <p className="capitalize" style={{ gridColumnEnd: 'd' }}>{currencyFormatDE.format(amount)}</p>
      </div>
      <div className="flex flex-row gap-05">
        <button className="button button-tiny button-danger margin-0" onClick={() => { deleteExpense(index) }}>Delete</button>
      </div>
    </div>
  )
}

export default expense
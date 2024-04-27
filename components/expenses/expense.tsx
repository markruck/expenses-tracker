import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils"

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
    <div key={`income_${index}`}>
      <div className="flex flex-row space-between">
        <p>{date.toLocaleDateString('de-DE')}</p>
        <p className="capitalize">{category}</p>
        <p className="capitalize">{description}</p>
        <p className="capitalize">{currencyFormatDE.format(amount)}</p>
      </div>
      <div className="flex flex-row gap-05">
        <p>Edit</p>
        <button onClick={() => { deleteExpense(index) }}>Delete</button>
      </div>
    </div>
  )
}

export default expense
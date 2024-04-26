import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils";

const Expenses = () => {
  // useSignals();
  const { expenses, deleteExpense, totalExpenses } = useExpensesStore();

  return (
    <div>
      {expenses.value.map((entry, index) => {
        return (
          <div key={`income_${index}`}>
            <div className="flex flex-row space-between">
              <p className="">{entry.date.toISOString()}</p>
              <p className="capitalize">{entry.type}</p>
              <p className="capitalize">{entry.description}</p>
              <p className="capitalize">{currencyFormatDE.format(entry.amount)}</p>
            </div>
            <div className="flex flex-row gap-05">
              <p>Edit</p>
              <button onClick={() => { deleteExpense(index) }}>Delete</button>
            </div>
          </div>
        )
      })}
      <p className="flex flex-end bold">Total Income: {currencyFormatDE.format(totalExpenses)}</p>
    </div>
  );
}

export default Expenses;
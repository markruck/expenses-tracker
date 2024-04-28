import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils"
import styles from "./expenses.module.css";
import Image from "next/image";

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
    <div key={`income_${index}`} className={"list-entry-container cursor-initial"}>
      <div className={styles.entry}>
        <p>{date.toLocaleDateString('de-DE')}</p>
        <p className="capitalize">{category}</p>
        <p className="font-size-small">{description}</p>
        <p className="capitalize text-right">{currencyFormatDE.format(amount)}</p>
        <Image className="cursor-pointer" src="/assets/images/trash-outline-icon.svg" alt="delete" width={16} height={16} onClick={() => { deleteExpense(index) }} />
      </div>
    </div>
  )
}

export default expense
import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils"
import styles from "./expenses.module.css";
import Image from "next/image";

type ExpenseProps = {
  date: Date;
  category: string;
  description: string;
  amount: number;
}

/**
 * A single expense entry
 * @example
 * <Expense date={new Date()} category="Groceries" description="Some description" amount={100} index={1} />
 * @param {Date} date - The date of the expense
 * @param {string} category - The category of the expense
 * @param {string} description - The description of the expense
 * @param {number} amount - The amount of the expense
 * @param {number} index - The index of the expense
 * @returns {React.Component} The Expense component
 */

const expense = ({ date, category, description, amount }: ExpenseProps) => {
  const { deleteExpense } = useExpensesStore();

  return (
    <div className={"list-entry-container cursor-initial"}>
      <div className={styles.entry}>
        <p>{date.toLocaleDateString('de-DE')}</p>
        <p className="capitalize">{category}</p>
        <p className="font-size-small">{description}</p>
        <p className="capitalize text-right">{currencyFormatDE.format(amount)}</p>
        <Image className="cursor-pointer" src="/assets/images/trash-outline-icon.svg" alt="delete" width={16} height={16} onClick={() => { deleteExpense({ date, category, amount }) }} />
      </div>
    </div>
  )
}

export default expense
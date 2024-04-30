import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils"
import styles from "./expenses.module.css";
import Image from "next/image";
import trashIcon from "@/public/assets/images/trash-outline-icon.svg";
import { ExpenseProps } from "@/lib/stores/expensesStore";

/**
 * A single expense entry
 * @example
 * <Expense date={new Date()} category="Groceries" description="Some description" amount={100} />
 * @param {ExpenseProps} props - The props for the component
 * @param {Date} props.date - The date of the expense
 * @param {string} props.category - The category of the expense
 * @param {string} props.description - The description of the expense
 * @param {number} props.amount - The amount of the expense
 */

const ExpenseEntry = ({ date, category, description, amount }: ExpenseProps) => {
  const { deleteExpense } = useExpensesStore();
  console.log(date)
  return (
    <div className={"list-entry-container cursor-initial"}>
      <div className={styles.entry}>
        <p>{date.toLocaleDateString('de-DE')}</p>
        <p className="capitalize">{category}</p>
        <p className="font-size-small">{description}</p>
        <p className="capitalize text-right">{currencyFormatDE.format(amount)}</p>
        <Image className="cursor-pointer" src={trashIcon} alt="delete" width={16} onClick={() => { deleteExpense({ date, category, amount }) }} />
      </div>
    </div>
  )
}

export default ExpenseEntry
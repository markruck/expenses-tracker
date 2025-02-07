import Image from "next/image";
import trashIcon from "@/public/assets/images/trash-outline-icon.svg";
import { useIncomeStore } from "@/lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
import styles from "./incomeEntry.module.css";
import { IncomeProps } from "@/lib/stores/incomeStore";

/**
 * IncomeEntry. A single income entry
 * @example
 * <IncomeEntry date={new Date()} type="salary" description="Some description" amount={100} />
 * @param {IncomeProps} props - The props for the component
 * @param {Date} props.date - The date of the income
 * @param {string} props.type - The type of the income
 * @param {string} props.description - The description of the income
 * @param {number} props.amount - The amount of the income
 */

const IncomeEntry = ({id, date, type, description, amount }: IncomeProps) => {
  const { deleteIncome } = useIncomeStore();

  return (
    <div className="list-entry-container">
      <div className={styles.incomeEntry}>
        <p className="capitalize">{type} income</p>
        <p className="font-size-small">{description}</p>
        <p className="text-right">{currencyFormatDE.format(amount)}</p>
        <Image className="cursor-pointer" src={trashIcon} alt="delete" width={16} onClick={() => { deleteIncome({ id }) }} />
      </div>
    </div>
  )
}

export default IncomeEntry;
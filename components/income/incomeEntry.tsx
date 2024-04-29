import Image from "next/image";
import trashIcon from "@/public/assets/images/trash-outline-icon.svg";
import { useIncomeStore } from "@/lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
import styles from "./incomeEntry.module.css";
import { IncomeProps } from "@/lib/stores/incomeStore";

type IncomeEntryProps = IncomeProps & {
  index: number;
}

const IncomeEntry = ({ type, description, amount, index }: IncomeEntryProps) => {
  const { deleteIncome } = useIncomeStore();

  return (
    <div className="list-entry-container">
      <div className={styles.incomeEntry}>
        <p className="capitalize">{type} income</p>
        <p className="font-size-small">{description}</p>
        <p className="text-right">{currencyFormatDE.format(amount)}</p>
        <Image className="cursor-pointer" src={trashIcon} alt="delete" width={16} onClick={() => { deleteIncome(index) }} />
      </div>
    </div>
  )
}

export default IncomeEntry;
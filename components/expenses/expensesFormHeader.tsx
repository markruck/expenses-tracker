import styles from "./expensesForm.module.css";
import Image from 'next/image';

type ExpensesFormHeaderProps = {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
}
/**
 * A header for the expenses form
 * @example
 * <ExpensesFormHeader />
 */

const ExpensesFormHeader = ({ showForm, setShowForm }: ExpensesFormHeaderProps) => {
  return (
    <div className="flex flex-1 space-between align-center margin-1-0">
      <h1>Expenses</h1>
      <div className="cursor-pointer" onClick={() => setShowForm(!showForm)}>{showForm ? <Image alt="Close" title="Close" className={styles.icon} src="/assets/images/minus-outline-icon.svg" width={24} height={24} /> : <Image alt="Add new income" title="Add new expense" className={styles.icon} src="/assets/images/addition-color-outline-icon.svg" width={24} height={24} />}</div>
    </div>
  );
}

export default ExpensesFormHeader;
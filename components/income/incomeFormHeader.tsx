import Image from 'next/image';
import styles from './income.module.css';

type IncomeFormHeaderProps = {
  showForm: boolean;
  setShowForm: () => void;
}

/**
 * A header for the income form
 * @example
 * <IncomeFormHeader />
 */

const IncomeFormHeader = ({ showForm, setShowForm }: IncomeFormHeaderProps) => {
  return (
    <div className="flex flex-1 space-between align-center margin-1-0">
      <h1>Income</h1>
      <div>
        <div className="cursor-pointer" onClick={() => setShowForm()}>{showForm
          ? <Image alt="Add new income" title="Add new income" className={styles.icon} src="/assets/images/minus-outline-icon.svg" width={24} height={24} />
          : <Image alt="Add new income" title="Add new income" className={styles.icon} src="/assets/images/addition-color-outline-icon.svg" width={24} height={24} />}</div>
      </div>
    </div>
  );
}

export default IncomeFormHeader;
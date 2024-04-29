import Image from 'next/image';

type IncomeFormHeaderProps = {
  setShowForm: () => void;
}

/**
 * A header for the income form
 * @example
 * <IncomeFormHeader />
 */

const IncomeFormHeader = ({ setShowForm }: IncomeFormHeaderProps) => {
  return (
    <div className="flex flex-1 space-between align-center margin-1-0">
      <h1>Income</h1>
      <>
        <div className="cursor-pointer" onClick={() => setShowForm()}>
          <button onClick={() => setShowForm()} className='button button-create'>New Income</button>
          {/* <Image alt="Add new income" title="Close" src="/assets/images/addition-color-outline-icon.svg" width={24} height={24} /> */}
        </div>
      </>
    </div>
  );
}

export default IncomeFormHeader;
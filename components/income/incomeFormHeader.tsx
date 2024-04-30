/**
 * A header for the income form
 * @param {object} props - The props for the component
 * @param {function} props.setShowForm - The function to set the showForm state
 * @example
 * <IncomeFormHeader />
 */

const IncomeFormHeader = ({ setShowForm }: { setShowForm: (showForm: boolean) => void }) => {
  return (
    <div className="flex flex-1 space-between align-center margin-1-0">
      <h1 className="margin-1-0">Income</h1>
      <button onClick={() => setShowForm(true)} className='button button-create'>New Income</button>
    </div>
  );
}

export default IncomeFormHeader;
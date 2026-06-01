/**
 * This file is responsible for rendering the header of the expenses form.
 * @example
 * <ExpensesFormHeader setShowForm={() => setShowForm(true)} />
 * @param {object} props - The props for the component
 * @param {function} props.setShowForm - The function to set the showForm state
 */

const ExpensesFormHeader = ({ setShowForm }: { setShowForm: (showForm: boolean) => void }) => {
  return (
    <div className="flex flex-1 space-between align-center margin-1-0">
      <h1 className="margin-1-0">Expenses</h1>
      <button onClick={() => setShowForm(true)} className='button button-create'>New Expense</button>
    </div>
  );
}

export default ExpensesFormHeader;
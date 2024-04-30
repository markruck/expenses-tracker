import { useMonthStore } from "@/lib/stores/monthStore";
import { months } from "@/lib/stores/monthStore";

/**
 * MonthSelector component
 * @example
 * <MonthSelector />
 */

const MonthSelector = () => {
  const { month, setMonth } = useMonthStore();
  return (
    <div className="flex flex-col">
      <select className="fit-content" onChange={(e) => setMonth(parseInt(e.target.value))} defaultValue={month.value}>
        <option disabled value="default">Select</option>
        {months.map((month, index) => {
          return <option key={`month_${index}`} value={index}>{month}</option>
        }
        )}
      </select>
    </div>
  )
}

export default MonthSelector
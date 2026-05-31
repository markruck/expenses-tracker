"use client";
import { useIncomeStore } from "@lib/stores/incomeStore";
import { useExpensesStore } from "@lib/stores/expensesStore";
import { currencyFormatDE } from "@lib/utils";
import MonthSelector from "../monthSelector";
import HomeCharts from "./homeCharts";
import LoadingScreen from "../ui/loadingScreen";
import Link from "next/link";

/** Home component
 * @example
 * <Home />
 */

const Home = () => {
  const { getIncome, loading: loadinIncome } = useIncomeStore();
  const { getExpenses, loading: loadingExpesnes } = useExpensesStore();

  const {
    value: { totalExpenses },
  } = getExpenses();
  const {
    value: { totalIncome },
  } = getIncome();

  if (loadinIncome || loadingExpesnes) return <LoadingScreen />;

  return (
    <div className="w-full">
      <div className="flex flex-1 space-between align-center margin-1-0">
        <h1 className="align-self-center margin-1-0">Dashborad</h1>
        <div>
          <Link
            href={{ pathname: "/income", query: { showForm: true } }}
            className="button button-create margin-right-1"
          >
            New Income
          </Link>
          <Link
            href={"/expenses?showForm=true"}
            className="button button-create margin-right-1"
          >
            New Expense
          </Link>
        </div>
      </div>
      <MonthSelector />
      <HomeCharts />
      <div className="list-container">
        <h2 className="margin-1-0">Summary</h2>
        <div className="flex flex-row space-between list-entry-container">
          <p>Total Income:</p>
          <p>{currencyFormatDE.format(totalIncome)}</p>
        </div>
        <div className="flex flex-row space-between list-entry-container">
          <p>Total Expenses:</p>
          <p>{currencyFormatDE.format(totalExpenses)}</p>
        </div>
        <div className="flex flex-row space-between bold margin-1-0">
          <p>Net Savings: </p>
          <p>{currencyFormatDE.format(totalIncome - totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

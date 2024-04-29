'use client'
import React from "react";
import type { Session } from "next-auth";
import { useUserStore } from "../../lib/stores/userStore";
import { useIncomeStore } from "@/lib/stores/incomeStore";
import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils";
import MonthSelector from "../monthSelector";;
import HomeCharts from "./homeCharts";

/** Home component
 * @example
 * <Home session={session} />
 * @param {Session} session - The session object
 * @returns {React.Component} The Home component
 */

const Home = ({ session }: { session: Session | null }) => {
  const { setUser } = useUserStore();
  const { totalIncome } = useIncomeStore();
  const { getExpenses } = useExpensesStore();

  const { value: { totalExpenses, expenses }
  } = getExpenses();


  if (session?.user) {
    setUser(session.user)

    return (
      <div className="w-full">
        <h1 className="align-self-center margin-1-0">Dashborad</h1>
        <MonthSelector />
        <HomeCharts />
        <div className="list-container">
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
  }

  return (
    <p>
      No session data, please <em>Sign In</em> first.
    </p>
  );
}

export default Home;

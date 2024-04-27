'use client'
import React from "react";
import type { Session } from "next-auth";
import { useUserStore } from "../lib/stores/userStore";
import styles from "../styles/Home.module.css";
import { useIncomeStore } from "@/lib/stores/incomeStore";
import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils";
import MonthSelector from "./monthSelector";


const Home = ({ session }: { session: Session | null }) => {
  const { setUser } = useUserStore();
  const { totalIncome } = useIncomeStore();
  const { getExpenses } = useExpensesStore();
  const [month, setMonth] = React.useState(new Date().getMonth());

  const { value: { totalExpenses }
  } = getExpenses(month);

  if (session?.user) {
    setUser(session.user)
    return (
      <div className="flex flex-col gap-4 w-full">
        <h1 className="align-self-center">Dashborad</h1>
        <MonthSelector month={month} setMonth={setMonth} />
        <div className="flex flex-row space-between">
          <p>Total Income:</p>
          <p>{currencyFormatDE.format(totalIncome)}</p>
        </div>
        <div className="flex flex-row space-between">
          <p>Total Expenses:</p>
          <p>{currencyFormatDE.format(totalExpenses)}</p>
        </div>
        <div className="flex flex-row space-between bold">
          <p>Net Savings: </p>
          <p>{currencyFormatDE.format(totalIncome - totalExpenses)}</p>
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

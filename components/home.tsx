'use client'
import React from "react";
import type { Session } from "next-auth";
import { useUserStore } from "../lib/stores/userStore";
import styles from "../styles/Home.module.css";
import { useIncomeStore } from "@/lib/stores/incomeStore";
import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils";


const Home = ({ session }: { session: Session | null }) => {
  const { setUser } = useUserStore();
  const { totalIncome } = useIncomeStore();
  const { totalExpenses } = useExpensesStore();
  if (session?.user) {
    setUser(session.user)
    return (
      <div className="flex flex-col gap-4 w-full">
        <h1>Dashborad</h1>
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

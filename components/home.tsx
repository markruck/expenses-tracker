'use client'
import React from "react";
import type { Session } from "next-auth";
import { useUserStore } from "../lib/stores/userStore";
import styles from "../styles/Home.module.css";


const Home = ({ session }: { session: Session | null }) => {
  const { setUser } = useUserStore();
  if (session?.user) {
    setUser(session.user)
    return (
      <div className="flex flex-col gap-4 w-full">
        <h1>Dashborad</h1>
        <p>Total Income</p>
        <p>Total Expenses</p>
        <p>Net Savings</p>
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

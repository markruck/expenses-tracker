"use client";

import { Expenses, ExpensesForm } from "@components/expenses";
import { Suspense } from "react";

/**
 * Expenses page. Returns the Expenses form and the Expenses list.
 * @example
 * <Page />
 * @returns {React.Component} The Expenses page
 */

const Page = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ExpensesForm />
      </Suspense>
      <Expenses />
    </>
  );
};

export default Page;

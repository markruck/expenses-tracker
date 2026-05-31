"use client";
import { Income, IncomeForm } from "@components/income";

/**
 * Income page. Returns the Income form and the Income list.
 * @example
 * <Page />
 * @returns {React.Component} The Income page
 */

const Page = () => {
  return (
    <>
      <IncomeForm />
      <Income />
    </>
  );
};

export default Page;

"use client";
import { Income, IncomeForm } from "@components/income";
import { Suspense } from "react";

/**
 * Income page. Returns the Income form and the Income list.
 * @example
 * <Page />
 * @returns {React.Component} The Income page
 */

const Page = () => {
  return (
    <>
      <Suspense fallback={null}>
        <IncomeForm />
      </Suspense>
      <Income />
    </>
  );
};

export default Page;

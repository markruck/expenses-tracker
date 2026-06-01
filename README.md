# Expenses Tracker

A small finance tracker built with Next.js and React. It demonstrates a practical monthly budgeting workflow with income and expense entries, category filtering, and chart-based summaries.

## Features

- Add income entries by type.
- Add expenses by category.
- Filter income and expenses by month.
- Filter expenses by category.
- Review dashboard totals for income, expenses, and net savings.
- View category breakdowns with charts.

## Getting Started

This project is intended as a compact example app. To run it locally:

Clone the repository:

```bash
git clone https://github.com/markruck/expenses-tracker.git
cd expenses-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Pages

- `/` - Dashboard with income, expenses, and net savings.
- `/income` - Income entries and income breakdown charts.
- `/expenses` - Expense entries, category filtering, and expense breakdown charts.

## Scripts

```bash
npm run dev    # Start the local development server
npm run build  # Create a production build
npm run start  # Start the production build
npm run lint   # Run ESLint
```

## Screenshots

### Dashboard

![Dashboard with income, expense, and savings summary](public/assets/screenshots/dashboard.png)

### Income

![Income page with category charts and income entries](public/assets/screenshots/income.png)

### Expenses

![Expenses page with category charts and grouped expense entries](public/assets/screenshots/expenses.png)

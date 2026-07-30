import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import Form from "../BKP/ExpenseTracker/bkp_Form";
import ExpensesList from "../BKP/ExpenseTracker/bkp_ExpensesList";

const App = () => {
  interface FormData {
    description: string;
    amount: number;
    category: number;
  }

  const [expenses, setExpenses] = useState<FormData[]>([]);

  const handleFormSubmit = (expense: FormData) => {
    setExpenses((prev) => [...prev, expense]);
    console.log(expenses);
  };
  
  const deleteExpense = (index: number) => {
    setExpenses((prev) => prev.filter((item, arrayIndex) => arrayIndex !== index));
  }

  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <h3 className="text-center py-1 text-success my-4">Add new Expenses</h3>
        <Form onSubmit={handleFormSubmit} />
        <br />
        <ExpensesList data={expenses} onDelete={(index) => deleteExpense(index)} />
      </div>
    </div>
  );
};

export default App;

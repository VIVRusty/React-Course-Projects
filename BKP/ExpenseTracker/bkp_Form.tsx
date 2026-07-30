import React from "react";
import { useForm, FieldValues } from "react-hook-form";

type FormProps = {
  onSubmit: (data: FormData) => void;
};

interface FormData {
  description: string;
  amount: number;
  category: number;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-2">
        <label className="fw-bold" htmlFor="Description">
          Description:
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          id="Description"
          type="text"
          className="form-control mb-2"
        />

        <label className="fw-bold" htmlFor="Amount">
          Amount:
        </label>
        <input
          {...register("amount", { required: true, minLength: 1 })}
          id="Amount"
          type="number"
          className="form-control mb-2"
        />

        <label className="fw-bold" htmlFor="Category">
          Category:
        </label>
        <select
          {...register("category", { required: true })}
          className="form-control mb-2"
          id="Category"
        >
          <option value={0}>Groceries</option>
          <option value={1}>Utilities</option>
          <option value={2}>Entertainment</option>
          <option value={3}>Others</option>
        </select>
      </div>
      <div className="form-group mb-2 d-flex flex-column">
        <button className="btn btn-primary" disabled={!isValid}>
          Add New Expense
        </button>
      </div>
    </form>
  );
};

export default Form;

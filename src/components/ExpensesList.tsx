import React, { Fragment, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";

type ExpensesListProp = {
  data: FieldValues | null;
  onDelete: (index: number) => void;
};

const ExpensesList = ({ data, onDelete }: ExpensesListProp) => {
  const [selectedCategory, setSelectedCategory] = useState(-1);

  const selectRef = useRef<HTMLSelectElement>(null);

  const categories = ["Groceries", "Utilities", "Entertainment", "Others"];

  return (
    <Fragment>
      {data?.length > 0 ? (
        <Fragment>
          <h3 className="text-center text-danger my-4">Check Expenses</h3>

          <select
            ref={selectRef}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(Number(e.target.value))}
            className="form-select mb-4"
          >
            <option value={-1} selected>
              None
            </option>
            <option value={0}>Groceries</option>
            <option value={1}>Utilities</option>
            <option value={2}>Entertainment</option>
            <option value={3}>Others</option>
          </select>

          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Deletion</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                (item: FieldValues, index: number) =>
                  (item.category == Number(selectRef.current?.value) ||
                    Number(selectRef.current?.value) === -1) && (
                    <tr>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>{categories[item.category]}</td>
                      <td>
                        <button
                          onClick={() => onDelete(index)}
                          className="btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
        </Fragment>
      ) : (
        <p className="text-danger text-center">No expense added so far</p>
      )}
    </Fragment>
  );
};

export default ExpensesList;

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  return (
    <div className="expense-list">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </div>
  );
}

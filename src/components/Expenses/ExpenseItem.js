import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const expense_date = props.expense.date,
    expense_amount = props.expense.amount,
    expense_title = props.expense.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense_date} />
      <div className="expense-item__description">
        <h2>{expense_title}</h2>
        <div className="expense-item__price">${expense_amount}</div>
      </div>
    </Card>
  );
}

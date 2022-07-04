import css from './TransactionStyle.module.css';

const TransactionHistoryList = ({ type, amount, currency }) => {
  return (
    <tr className={css.table}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryList;

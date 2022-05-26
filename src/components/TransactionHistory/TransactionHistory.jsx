import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = (props) => {
  const {items} = props;

  return (
    <table className={s.table}>
    <thead className={s.head}>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map(item => 
            <tr key={item.id} className={s.row}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>        
            )}
    </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionHistory;
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = (props) => {
  const {title, stats} = props;

  return (
    <section className={s.statistics}>
    {title && (<h2 className={s.title}>{title}</h2>)}

    <ul className={s.statlist}>
      {stats.map(el => 
            <li className={s.item} key={el.id}>
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
        )}
    </ul>
  </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
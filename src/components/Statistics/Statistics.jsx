import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function CreateStatistics(props) {
  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}

      <ul className={css.statList}>
        {props.data.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

CreateStatistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

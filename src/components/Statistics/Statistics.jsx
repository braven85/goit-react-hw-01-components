import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics(props) {
  const stats = props.stats;
  const view = stats.map(stat => (
    <li key={stat.id} className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={styles.statistics}>
      {props.title === undefined ? (
        <h2 className={styles.hidden}></h2>
      ) : (
        <h2 className={styles.title}>{props.title}</h2>
      )}
      <ul className={styles.stat__list}>{view}</ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;

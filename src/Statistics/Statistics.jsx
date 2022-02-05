import './Statistics.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setColors() {
  const listItems = document.querySelectorAll('.item');
  listItems.forEach(item => {
    item.style.backgroundColor = getRandomHexColor();
  });
}

function Statistics(props) {
  const stats = props.stats;
  const view = stats.map(stat => (
    <li key={stat.id} className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  ));

  if (props.title === undefined) {
    setColors();
    return (
      <section className="statistics">
        <ul className="stat-list">{view}</ul>
      </section>
    );
  } else {
    setColors();
    return (
      <section className="statistics">
        <h2 className="title">{props.title}</h2>
        <ul className="stat-list">{view}</ul>
      </section>
    );
  }
}

export default Statistics;

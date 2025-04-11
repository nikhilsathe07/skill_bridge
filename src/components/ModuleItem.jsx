import '../styles/ModuleItem.css';

function ModuleItem({ title, duration }) {
  return (
    <li className="module-item">
      <div>
        <h3>{title}</h3>
        <p>{duration}</p>
      </div>
      <button>Start</button>
    </li>
  );
}

export default ModuleItem;
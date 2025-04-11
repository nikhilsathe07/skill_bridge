import '../styles/ProgressBar.css';

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      <span className="progress-label">{progress}%</span>
    </div>
  );
}

export default ProgressBar;
import '../styles/MentorCard.css';

function MentorCard({ name, skills, bio }) {
  return (
    <div className="mentor-card">
      <h2>{name}</h2>
      <p className="skills">Skills: {skills.join(', ')}</p>
      <p>{bio}</p>
      <button>Book Session</button>
    </div>
  );
}

export default MentorCard;
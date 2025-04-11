import { Link } from 'react-router-dom';
import MentorCard from '../components/MentorCard.jsx';
import '../styles/MentorProfiles.css';

function MentorProfiles() {
  const mentors = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['Woodworking', 'Carpentry'],
      bio: 'Expert in traditional woodworking with 20 years of experience.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Pottery', 'Ceramics'],
      bio: 'Master potter teaching ancient techniques.',
    },
    {
      id: 3,
      name: 'Alex Brown',
      skills: ['Weaving', 'Textile Design'],
      bio: 'Specialist in handwoven textiles.',
    },
  ];

  return (
    <div className="mentor-profiles">
      <h1>Mentor Profiles</h1>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <div className="mentor-list">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            name={mentor.name}
            skills={mentor.skills}
            bio={mentor.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default MentorProfiles;
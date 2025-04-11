import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar.jsx';
import '../styles/Dashboard.css';

function Dashboard() {
  const enrolledCourses = [
    { id: 1, title: 'Learn Traditional Woodworking', progress: 30 },
    { id: 2, title: 'Pottery Basics', progress: 60 },
  ];

  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>
          No courses enrolled yet.{' '}
          <Link to="/courses" className="course-link">
            Browse courses
          </Link>
          .
        </p>
      ) : (
        <ul className="course-list">
          {enrolledCourses.map((course) => (
            <li key={course.id} className="course-item">
              <div className="course-details">
                <h3>{course.title}</h3>
                <ProgressBar progress={course.progress} />
              </div>
              <Link to={`/course/${course.id}`} className="continue-link">
                Continue
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/upload" className="upload-link">
        Upload Your Work
      </Link>
    </div>
  );
}

export default Dashboard;
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ModuleItem from '../components/ModuleItem.jsx';
import '../styles/CourseDetail.css';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setCourse({
          id,
          title: 'Learn Traditional Woodworking',
          description: 'Master woodworking techniques from experts.',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          modules: [
            { id: 1, title: 'Tool Basics', duration: '10 min' },
            { id: 2, title: 'Crafting Joints', duration: '15 min' },
            { id: 3, title: 'Polishing Wood', duration: '12 min' },
          ],
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load course');
        setLoading(false);
      }
    }, 1000);
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!course) return <div className="error">Course not found</div>;

  return (
    <div className="course-detail">
      <Link to="/courses" className="back-link">
        ← Back to Courses
      </Link>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div className="video-container">
        <ReactPlayer url={course.videoUrl} controls width="100%" />
      </div>
      <h2>Modules</h2>
      <ul className="module-list">
        {course.modules.map((module) => (
          <ModuleItem
            key={module.id}
            title={module.title}
            duration={module.duration}
          />
        ))}
      </ul>
    </div>
  );
}

export default CourseDetail;
import { NavLink } from 'react-router-dom';
import '../styles/course.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BrowseCourses = () => {
  
    const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://skill-bridge-v89g.onrender.com/getAllCourses')
      .then((response) => {
        const courseList = response.data.data; // ✅ correct access
        console.log('Fetched Courses:', courseList);
        setCourses(courseList);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load courses');
        setLoading(false);
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
        <NavLink to="/addCourse">
        <button className="addBtn">Create Course</button>
        </NavLink>
        <h1 className='courseHead'>All Courses</h1>
        <div className="course-container">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul className="course-list">
            {courses.map((course) => (
            <li key={course._id} className="course-item">
              <strong>Course : {course.courseName}</strong><br />
              <p><b>Description:</b> {course.description}</p>
              <p><b>Duration:</b> {course.courseDuration}</p>
              <p><b>Admin:</b> {course.admin}</p>
              {course.imageUrl && (
                <img
                  src={course.imageUrl}
                  alt={course.courseName}
                  width="200"
                />
              )}
            </li>
          ))}
        </ul>
      )}
      </div>

    </>
  );
};

export default BrowseCourses;

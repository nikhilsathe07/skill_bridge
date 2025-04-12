import { useState } from 'react';
import '../styles/course.css';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseName || !courseDuration || !description || !imageFile) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('courseName', courseName);
    formData.append('courseDuration', courseDuration);
    formData.append('description', description);
    formData.append('image', imageFile); // must match multer's field name

    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:2000/coursePost', {
        method: 'POST',
        headers: {
          Authorization: token // token in header
          // DO NOT set Content-Type here! Browser will set it with correct boundary
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Something went wrong');
        return;
      }

      alert('Course added successfully!');
      setCourseName('');
      setCourseDuration('');
      setDescription('');
      setImageFile(null);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add course');
    }
  };

  return (
    <div className="form">
      <form className="course" onSubmit={handleSubmit} encType="multipart/form-data">
        <h3>Add New Course</h3>

        <label>Course Name</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Enter course name"
          required
        />

        <label>Duration</label>
        <input
          type="text"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          placeholder="Enter course duration"
          required
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          required
        />

        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          required
        />

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default AddCourse;

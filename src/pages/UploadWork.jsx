import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/UploadWork.css';

function UploadWork() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (!fileType.match('image/*') && !fileType.match('video/*')) {
        setError('Please upload an image or video');
        setFile(null);
        setPreview(null);
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !title) {
      setError('Please provide a title and select a file');
      return;
    }
    console.log('Uploading:', { title, file });
    alert('Work uploaded successfully! (Mock)');
    setFile(null);
    setPreview(null);
    setTitle('');
    setError(null);
  };

  return (
    <div className="upload-work">
      <h1>Upload Your Work</h1>
      <Link to="/dashboard" className="back-link">
        ← Back to Dashboard
      </Link>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Image or Video</label>
          <input
            type="file"
            id="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
        </div>
        {preview && (
          <div className="preview">
            {file.type.match('image/*') ? (
              <img src={preview} alt="Preview" />
            ) : (
              <video src={preview} controls />
            )}
          </div>
        )}
        {error && <p className="error">{error}</p>}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadWork;
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Login from './pages/Login.jsx';
import MentorProfiles from './pages/MentorProfiles.jsx';
import Dashboard from './pages/Dashboard.jsx';
import UploadWork from './pages/UploadWork.jsx';
import Forum from './pages/Forum.jsx';
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import BrowseCourses from "./components/courses.jsx";
import Register from './pages/Register.jsx';
import AddCourse from './components/addCourse.jsx';

// Placeholders for your friend's pages
// function Home() {
//   return <h1>Home Page (Your friend is working on this)</h1>;
// }
// function BrowseCourses() {
//   return <h1>Browse Courses (Your friend is working on this)</h1>;
// }

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<BrowseCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/mentors" element={<MentorProfiles />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadWork />} />
        <Route path="/forum" element={<Forum />} />
        <Route path='/addCourse' element={<AddCourse/>}/>
      </Routes>
    </div>
  );
}

export default App;
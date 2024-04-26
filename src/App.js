import './App.css';
import store from './appstate/store'
import { RequireToken } from './utils/auth';
import Navbar from './components/Navbar';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Room from './pages/room';
import EmptyRoom from './pages/empty-room';
import Login from './pages/login';
import NotFound from './pages/404';
import Home from './pages/admin/home';
import Profile from './pages/admin/profile';
import Admin from './pages/admin/index';
import Generate from './pages/admin/generate';
import Section from './pages/admin/section/index';
import SectionDetails from './pages/admin/section/details';
import Faculty from './pages/admin/faculty/index';

import FacultyDetails from './pages/admin/faculty/detail';

import Course from './pages/admin/course/index';
import CourseDetails from './pages/admin/course/details';


import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <Provider store={store}>
      <Router >
        <Navbar />
        {/* Page Route Section Start */}
        <Routes>
          <Route path="/" element={<Student></Student>} />
          <Route path="/teacher" element={<Teacher></Teacher>} />
          <Route path="/room" element={<Room></Room>} />
          <Route path="/empty" element={<EmptyRoom></EmptyRoom>} />
          <Route path="/login" element={<Login></Login>} />
          {/* Restriction Route Section Start */}

          <Route path="/admin" element={<RequireToken><Admin></Admin></RequireToken>} />

          <Route path="/admin/assigned" element={<RequireToken><Home></Home></RequireToken>} />

          <Route path="/admin/generate" element={<RequireToken><Generate></Generate></RequireToken>} />

          <Route path="/admin/profile" element={<RequireToken><Profile></Profile></RequireToken>} />

          <Route path="/admin/section" element={<RequireToken><Section></Section></RequireToken>} />

          <Route path="/admin/section/details" element={<RequireToken><SectionDetails></SectionDetails></RequireToken>} />

          <Route path="/admin/faculty" element={<RequireToken><Faculty></Faculty></RequireToken>} />

          <Route path="/admin/faculty/details" element={<RequireToken><FacultyDetails></FacultyDetails></RequireToken>} />


          <Route path="/admin/course" element={<RequireToken><Course></Course></RequireToken>} />

          <Route path="/admin/course/details" element={<RequireToken><CourseDetails></CourseDetails></RequireToken>} />

          <Route path="*" element={<NotFound></NotFound>} />

          {/* Page Route Section End */}
        </Routes>

      </Router>
    </Provider>

  );
}

export default App;

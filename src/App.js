import './styles/App.css';
import store from './appstate/store'
import { RequireToken } from './utils/auth';
// import Navbar from './components/Navbar';
// import Student from './pages/student';
// import Teacher from './pages/teacher';
// import Room from './pages/room';
// import EmptyRoom from './pages/empty-room';
import Login from './pages/login';
import NotFound from './pages/404';
import Home from './pages/admin/home';
import Profile from './pages/admin/profile';
import AdminStaff from './pages/admin/admin_staff';
import Admin from './pages/admin/index';
import Generate from './pages/admin/generate';
import Section from './pages/admin/section/index';
import SectionDetails from './pages/admin/section/details';
import Faculty from './pages/admin/faculty/index';
import FacultyDetails from './pages/admin/faculty/detail';
import Course from './pages/admin/course/index';
import CourseDetails from './pages/admin/course/details';
import AssignedRoom from './pages/admin/room'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';


function App() {




  return (
    <Provider store={store}>
      <Router >

        <Routes>
        <Route path="/" element={<RequireToken><Admin></Admin></RequireToken>} /> 
          {/* <Route path="/" element={<Navbar><Student></Student></Navbar>} /> */}
          {/* <Route path="/teacher" element={<Navbar><Teacher></Teacher></Navbar>} />
          <Route path="/room" element={<Navbar><Room></Room></Navbar>} />
          <Route path="/empty" element={<Navbar><EmptyRoom></EmptyRoom></Navbar>} /> */}
          <Route path="/login" element={<Login></Login>} />
          {/* Restriction Route Section Start */}
          <Route path="/admin" element={<RequireToken><Admin></Admin></RequireToken>} />

          <Route path="/admin/routine" element={<RequireToken><AdminLayout><Home></Home></AdminLayout></RequireToken>} />

          <Route path="/admin/generate" element={<RequireToken><AdminLayout><Generate></Generate></AdminLayout></RequireToken>} />
          
          <Route path="/admin/room" element={<RequireToken><AdminLayout><AssignedRoom></AssignedRoom></AdminLayout></RequireToken>} />
          <Route path="/admin/profile" element={<RequireToken><AdminLayout><Profile></Profile></AdminLayout></RequireToken>} />

          <Route path="/admin/list" element={<RequireToken><AdminLayout><AdminStaff></AdminStaff></AdminLayout></RequireToken>} />
          <Route path="/admin/section" element={<RequireToken><AdminLayout><Section></Section></AdminLayout></RequireToken>} />

          <Route path="/admin/section/details" element={<RequireToken><SectionDetails></SectionDetails></RequireToken>} />

          <Route path="/admin/faculty" element={<RequireToken><AdminLayout><Faculty></Faculty></AdminLayout></RequireToken>} />

          <Route path="/admin/faculty/details" element={<RequireToken><AdminLayout><FacultyDetails></FacultyDetails></AdminLayout></RequireToken>} />


          <Route path="/admin/course" element={<RequireToken><AdminLayout><Course></Course></AdminLayout></RequireToken>} />

          <Route path="/admin/course/details" element={<RequireToken><AdminLayout><CourseDetails></CourseDetails></AdminLayout></RequireToken>} />

          <Route path="*" element={<NotFound></NotFound>} />

          {/* Page Route Section End */}
        </Routes>


      </Router>
    </Provider>

  );
}

export default App;

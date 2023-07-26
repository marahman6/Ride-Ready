import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicainList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ServiceApptForm from './ServiceApptForm';
import ServiceAppts from './ServiceAppts';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicianlist" element={<TechnicainList />} />
          <Route path="/technicianform" element={<TechnicianForm />} />
          <Route path="/serviceappointmentform" element={<ServiceApptForm />} />
          <Route path="/serviceappointments" element={<ServiceAppts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

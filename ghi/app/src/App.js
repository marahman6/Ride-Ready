import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import TechnicainList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ServiceApptForm from './ServiceApptForm';
import ServiceAppts from './ServiceAppts';
import ServiceHistory from './ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturerform" element={<ManufacturerForm />} />
          <Route path="/models" element={<ModelList />} />
          <Route path="/modelform" element={<ModelForm />} />
          <Route path="/technicianlist" element={<TechnicainList />} />
          <Route path="/technicianform" element={<TechnicianForm />} />
          <Route path="/serviceappointments" element={<ServiceAppts />} />
          <Route path="/serviceappointmentform" element={<ServiceApptForm />} />
          <Route path="/servicehistory" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

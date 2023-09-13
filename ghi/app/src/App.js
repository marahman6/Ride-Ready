import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import SalespersonForm from './SalespersonForm';
import Salespeoplelist from './Salespeoplelist';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import NewSaleform from './NewSaleForm';
import Saleslist from './Sales';
import SalesHistory from './SalespersonHistory';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import TechnicainList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import ServiceApptForm from './ServiceApptForm';
import ServiceAppts from './ServiceAppts';
import ServiceHistory from './ServiceHistory';
import "./index.css";

function App() {
  console.log("w");
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/salespersonform" element={<SalespersonForm />} />
          <Route path="/salespeoplelist" element={<Salespeoplelist />} />
          <Route path="/customerform" element={<CustomerForm />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/newsaleform" element={<NewSaleform />} />
          <Route path="/newsalelist" element={<Saleslist />} />
          <Route path="/salespersonhistory" element={<SalesHistory />} />
          <Route path="/automobilelist" element={<AutomobileList />} />
          <Route path="/automobileform" element={<AutomobileForm />} />
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

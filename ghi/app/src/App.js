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

function App() {
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

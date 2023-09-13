import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand logo" to="/">RIDE READY</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto dropdown ms-mobile">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"  aria-expanded="false">
                Inventory
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
                <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturerform">Create a Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/modelform">Create a Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobilelist">Our Inventory</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobileform">Create an Inventory</NavLink></li>
              </ul>
            </div>

            <div className="navbar-nav dropdown ms-mobile">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" aria-expanded="false">
                Sales
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
                <li><NavLink className="dropdown-item" to="/salespeoplelist">Sales People</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salespersonform">Add a Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customerlist">Customers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customerform">Add a Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/newsaleform">Add a Sale</NavLink></li>
                <li><NavLink className="dropdown-item" to="/newsalelist">Sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salespersonhistory">Salesperson History</NavLink></li>
              </ul>
            </div>

            <div className="navbar-nav dropdown ms-mobile service">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" aria-expanded="false">
                Service
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
                <li><NavLink className="dropdown-item" to="/technicianlist">Technicians</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicianform">Add a Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="/serviceappointments">Service Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/serviceappointmentform">Create a Service Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/servicehistory">Service History</NavLink></li>
              </ul>
            </div>

        </div>
      </div>
    </nav>

  )
}

export default Nav;

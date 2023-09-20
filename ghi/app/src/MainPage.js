import React from 'react';
import FeaturedCard from './FeatureCrad';


// function InfoCard() {
//   return (
//     <div className="card border-primary mx-3">
//       <div className="card-header">Header</div>
//       <div className="card-body text-primary">
//         <h5 className="card-title">Primary card title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//       </div>
//     </div>
//   );
// }

function MainPage() {
  // var w = window.innerWidth;
  console.log("window");
  return (
    <div className="text-center" id="main-header">
      <div className="main-flex">
        <h1 className="display-5 fw-bold">RIDE READY</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership management!
          </p>
        </div>
        <FeaturedCard />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary mx-3">
                <div className="card-header">INVENTORY</div>
                <img className="card-img-top card-image" src="https://images.pexels.com/photos/14065384/pexels-photo-14065384.jpeg" alt="Card image cap"></img>
                <div className="card-body text-primary">
                  <p className="card-text">
                  Our inventory service simplifies automobile business operations. Easily create and manage manufacturers, streamline automobile model oversight, and optimize inventory control. Enhance efficiency and elevate your automobile dealership with our comprehensive inventory service – the ultimate tool for modern businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="card border-primary mx-3">
                <div className="card-header">SALES</div>
                <img className="card-img-top card-image" src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg" alt="Card image cap"></img>
                <div className="card-body text-primary">
                  <p className="card-text">
                  Our web application sales service is your solution for efficient sales management. Create and oversee sales, manage salespersons effortlessly, and track their history with a dedicated page. Additionally, create and manage customer profiles, all within one intuitive platform, to supercharge your sales operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="card border-primary mx-3">
                <div className="card-header">SERVICE</div>
                <img className="card-img-top card-image" src="https://images.pexels.com/photos/9607048/pexels-photo-9607048.jpeg" alt="Card image cap"></img>
                <div className="card-body text-primary">
                  <p className="card-text">
                  Introducing our web application service, the hub for streamlined technician management. Easily create and oversee technicians, seamlessly schedule and manage service appointments, and access comprehensive appointment history. A one-stop solution for optimizing your service operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 invisible">
            <div className="card border-primary mx-3">
                <div className="card-header">Inventory</div>
                <div className="card-body text-primary">
                  <h5 className="card-title">Primary card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;



// function MainPage() {
//   return (
//     <div className="text-center" id="main-header">

//       <div className="main-flex">
//         <h1 className="display-5 fw-bold">RIDE READY</h1>
//         <div className="col-lg-6 mx-auto">
//           <p className="lead mb-4">
//             The premiere solution for automobile dealership
//             management!
//           </p>
//         </div>
//         <div className="card text-center invisible">
//           <div className="card-header">
//             Featured
//           </div>
//           <div className="card-body">
//             <h5 className="card-title">Special title treatment</h5>
//             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//           <div className="card-footer text-muted">
//             2 days ago
//           </div>
//         </div>
//         <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card border-primary m-3">
//               <div className="card-header">Header</div>
//               <div className="card-body text-primary">
//                 <h5 className="card-title">Primary card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card border-primary m-3">
//               <div className="card-header">Header</div>
//               <div className="card-body text-primary">
//                 <h5 className="card-title">Primary card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card border-primary m-3">
//               <div className="card-header">Header</div>
//               <div className="card-body text-primary">
//                 <h5 className="card-title">Primary card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default MainPage;

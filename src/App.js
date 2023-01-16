/* eslint-disable react/jsx-no-undef */

 import 'bootstrap/dist/css/bootstrap.min.css';
 import isoimg from './istockphoto.jpg'
 import './App.css';
 import {SignUp} from './components/SignUp'
 //import EmployeeReg from './components/EmployeeReg';

function App() {
  return (

        <div className="container mt-3">
          <div className="row">
             <div className="col-md-5">
             <SignUp />
             </div> 

             <div className="col-md-7 my-auto">
              <img className="img-fluid w-100" src={isoimg} alt=""/>
            </div>
             
          </div> 
                
        </div>
  );
}

export default App;

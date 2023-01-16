

// import axios from "axios";
// import { useState } from "react";
// import "../index.css"  

// // import {BsPersonFill} from "react-icons/bs";
// // import { FaHome } from "react-icons/fa";
// // import { RiPhoneFill } from "react-icons/ri";
// // import { BsGenderAmbiguous} from "react-icons/bs";
// // import { FiBarChart2 } from "react-icons/fi";

// function EmployeeReg() {

// // eslint-disable-next-line no-unused-vars
// const [id,setId]=useState('');
// const [name,setName]=useState('');
// const [addres,setAddress]=useState('');
// const [mobile,setmobile]=useState('');
// const [gender,setgender]=useState('');
// const [age,setage]=useState('');

// // eslint-disable-next-line no-unused-vars
// const [message, setMessage] = useState('');





// async function save(event){

//    event.preventDefault();

//             try{
//                await axios.post("http://localhost:8085/api/v1/employee/save",
//                {
//                   employeename: name,
//                   employeeaddress: addres,
//                   mobile: mobile,
//                   gender:gender,
//                   age:age
            
//                });
//                console.log(name,addres,mobile);
//                alert("Employee Registation Successfully..")
//                setId("");
//                setName("");
//                setAddress("");
//                setmobile("");
//                setgender("");
//                setage("");
         
         
//             } catch (err) {
//                alert("Failed to Register...");
//             }

            

   

// }


//     return (


//       <div class="container  p-5 h-500 ">
         
//                <div class="row align-items-center d-flex flex-column gap-4">
//                   <h1><b>Registation</b></h1>     
//                 <div class="col gap-9">
//                    <BsPersonFill size={'26'}/>

//                    <input size="25" height="11" type="text" name="n1" placeholder="Enter Name"
//                       value={name}
//                       onChange={(event)=> {
//                         setMessage(event.target.value);
//                         setName(event.target.value);
//                      }}
//                    />
//                 </div>

//                 <div class="col">
//                       <FaHome size={'26'}/>
//                       <input size="25" height="11" type="text" name="a1"  placeholder="Enter Address"
//                          value={addres}
//                          onChange={(event)=>{
//                           setMessage(event.target.value);
//                          setAddress(event.target.value);
//                       }}
//                       />
//                 </div>

//                 <div class="col">
//                      <RiPhoneFill size={'26'}/>
//                         <input size="25" height="11" name="m1"  type="text" placeholder="Enter Mobile Num"
//                          value={mobile}
//                          onChange={(event)=> {
//                         setMessage(event.target.value);

//                          setmobile(event.target.value);
//                         }}
//                          />
//                      </div>

//                <div class="col">
//                     <BsGenderAmbiguous size={'26'}/>
//                         <input size="25" height="11" name="g1" type="text" placeholder="Enter Gender"
//                         value={gender}
//                         onChange={(event)=> {
//                         setMessage(event.target.value);

//                         setgender(event.target.value);
//                          }}
//                         />

//                      </div>


//                 <div class="col">    
//                       <FiBarChart2 size={'26'}/>
//                       <input size="25" height="11" name="g1" type="text" placeholder="Enter Age"
//                       value={age}
//                       onChange={(event)=> {
//                         setMessage(event.target.value);

//                          setage(event.target.value);
//                        }}
//                       />

//                      </div>      

//                   <div class="col">
                 
//                   <button class="btn btn-primary btm-2"  onClick={save}> Register </button>
//                   </div>
//              </div>
            
//       </div>


     
 
//     );

//    } 
  
//   export default EmployeeReg;
  
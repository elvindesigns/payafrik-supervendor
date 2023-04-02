import React, { useEffect, useState } from 'react'
import axios from "axios";
import { changeTitle, checkIfLogin, getLoggedInRole } from '../functions/reusables';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen'
import { nigerianStates } from '../Data/data';

export default function Register() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);



  // const loginUser = async () => {

  //   setLoading(true);
  //   setErrorMessage("")
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   const data = {
  //     email: email,
  //     password: password,
  //     org_pid: parseInt(orgId),
  //     org_role: parseInt(orgRole)
  //   };

  //   console.log(data)
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_MAIN}auth/login/${orgRoleText}/`,
  //       data,
  //       {
  //         headers: headers,
  //       }
  //     );

  //   console.log(response.data)
  //   // localStorage.setItem("user_detail", JSON.stringify(response.data));
  //   // navigate(`/${getLoggedInRole()}-dashboard`);
      
  //   } catch (error) {
  //     console.log(error.response?.data?.message);
  //     setErrorMessage(error.response.data?.message)
  //     setLoading(false);
  //   }
  // };

  // const checkIfUserIsLoggedIn = async () => {
  //   let isLogin =   await checkIfLogin()
  //   if (isLogin) {
  //     navigate(`/${getLoggedInRole()}-dashboard`);
  //   } else {
  //     navigate("/");
  //     // setPageLoading(false);
  //   }
  // }

  const performLoginTasks = async () =>{
    changeTitle("Login | PayAfrik")
    // await checkIfUserIsLoggedIn()
    // await fetchRoles()
    // await fetchOrganization()
    setLoading(false)
  }

  const [currentTab, setCurrentTab] = useState(1);
  const gotoStep1 = () => {
    setCurrentTab(1)
  }
  const gotoStep2 = () => {
    setCurrentTab(2)
  }

  useEffect(() => {
    performLoginTasks()
  }, []);

  return (
    loading ? <LoadingScreen
    loading={loading}
    bgColor='#ffffff'
    spinnerColor='#9ee5f8'
    textColor='#77d5cc'
    logoSrc='assets/images/logo-dark.png'
    text='...'
  
    ></LoadingScreen>:
    <div className=" authentication-bg authentication-bg-pattern" style={{minHeight:'100vh', backgroundImage:"url(assets/images/bg-auth4.png)"}}>
       <div className="account-pages" style={{paddingTop:'100px', paddingBottom:'100px'}}> 
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        
                        <div className="card">
                        <div className="text-center mt-4">   
                            <a href="index.html">
                                <img src="assets/images/logo-dark.png" alt="" height="70" className="mx-auto"/>
                            </a>
                            <p className="text-muted">PayAfrik Vendor Dashboard</p>

                        </div>
                            <div className="card-body p-4">
                                
                                <div className="text-center mb-4">
                                    <h4 className="text-uppercase mt-0">Create Account</h4>
                                </div>

                                <form class="form-wizard" id="regForm" action="#" method="POST">
                      <div class="tab" style={{display: currentTab === 1 ? "block" : "none"}}>
                        <div className='row'>
                          <div className='col-6'>
                            <div class="mb-3">
                              <label for="name">First Name</label>
                              <input class="form-control" id="name" type="text" placeholder="Johan" required="required"/>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div class="mb-3">
                              <label for="lname">Last Name</label>
                              <input class="form-control" id="lname" type="text" placeholder="Deo"/>
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com"/>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="contact">Phone No.</label>
                            <input class="form-control" id="contact" type="phone" placeholder="123456789"/>
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Password"/>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="exampleInputPassword1">Confirm Password</label>
                          <input class="form-control" id="exampleInputcPassword1" type="password" placeholder="Enter again"/>
                            </div>
                          </div>
                        </div>
                        
                        
                        
                      </div>
                      <div class="tab" style={{display: currentTab === 2 ? "block" : "none"}}>
                        <div class="mb-3 m-t-15">
                          <label for="exampleFormControlInput1">Business Name</label>
                          <input class="form-control" id="exampleFormControlInput1" type="text" placeholder="Bussiness Name"/>
                        </div>
                        <div className='row'>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1">Business Email address</label>
                            <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com"/>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="contact">Bussiness Phone No.</label>
                            <input class="form-control" id="contact" type="phone" placeholder="123456789"/>
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="contact">State</label>
                            <select class="form-select" id="validationCustom04" required="">
                            <option selected="" disabled="" value="">Choose...</option>
                            {nigerianStates.map((state)=>(<option>{state}</option>))}
                          </select>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div class="mb-3">
                            <label for="contact">City</label>
                            <input class="form-control" id="contact" type="text" placeholder=""/>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1">Address</label>
                          <textarea class="form-control" id="exampleInputcPassword1" type="password" rows={2} placeholder="Enter Address"></textarea>
                        </div>
                      </div>
                      
                      
                      <div>
                        <div class=" btn-mb">
                          <div className='row'>
                            <div className="col-12 text-end">
                              {currentTab === 1 ? <button class="btn btn-primary" id="nextBtn" type="button" onClick={gotoStep2}>Add Vendor Personal Information</button> : <div></div>}

                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-6'>
                            {currentTab === 2 ? <button class="btn btn-secondary" id="prevBtn" type="button" onClick={gotoStep1} >Previous</button>: <div></div>}
                            </div>
                            <div className='col-6 text-end'>
                            {currentTab === 2 ? <button class="btn btn-primary " id="nextBtn" type="button" onClick={()=>{navigate("/dashboard")}}>Add Vendor Business Information</button>:<div></div>}

                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Circles which indicates the steps of the form:--> */}
                      <div class="text-center">
                        <span class={ currentTab === 1 ? "step active" : "step"}></span>
                        <span class={ currentTab === 2 ? "step active":"step"}></span>

                      </div>
                      {/* <!-- Circles which indicates the steps of the form:--> */}
                      {/* <!-- Container-fluid Ends--> */}
                    </form>
                    <p className="mt-4 mb-0 text-center">Already have an account?<Link to={"/"} className="ms-2">Login Here </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

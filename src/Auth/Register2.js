import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { nigerianStates } from '../Data/data';

export default function Register() {
  const [currentTab, setCurrentTab] = useState(1);
  const gotoStep1 = () => {
    setCurrentTab(1)
  }
  const gotoStep2 = () => {
    setCurrentTab(2)
  }
  return (
    <div className="container-fluid" style={{padding:0}}>
      <div className="row">
        <div className="col-xl-7 col-xl-7 b-center bg-size" style={{ backgroundSize: "cover", backgroundPosition: "center center"}}><img className="bg-img-cover bg-center"  style={{width:"100%", height:"100%", objectFit:"cover"}} src="../assets/images/login/4.jpg" alt="loginpage"/></div>
        <div className="col-xl-5 p-0">
        <div class="login-card">
                  
                  <div>
                   <div><a className="logo" href="index.html"><img className="img-fluid for-light"  src="../assets/images/logo/login.png" alt="loginpage"/></a></div>
                  <div className='login-main' style={{width:'500px'}}>
                  <div class="card-header " style={{backgroundColor:'white', paddingBottom:'20px'}}>
                    {currentTab === 1 ?
                    <div>
                      <h5>Personal Information</h5><span>Share personal details</span>
                    </div>:
                    <div>
                    <h5>Vendor Information</h5><span>Share the business information</span>
                  </div>
                    }
                  </div>
                  <div class="card-body">
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
                              {currentTab === 1 ? <button class="btn btn-primary" id="nextBtn" type="button" onClick={gotoStep2}>Next</button> : <div></div>}

                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-6'>
                            {currentTab === 2 ? <button class="btn btn-secondary" id="prevBtn" type="button" onClick={gotoStep1} >Previous</button>: <div></div>}
                            </div>
                            <div className='col-6 text-end'>
                            {currentTab === 2 ? <button class="btn btn-primary " id="nextBtn" type="button" onClick={gotoStep2}>Create Account</button>:<div></div>}

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
                  </div>
                </div>
                <p className="mt-4 mb-0 text-center">Already have an account?<Link className="ms-2" to={"/"}>Login Here </Link></p>
                </div>
                
                </div>
        </div>
      </div>
    </div>
  ) 
}

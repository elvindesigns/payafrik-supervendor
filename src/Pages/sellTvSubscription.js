import React from 'react'
import { nigerianStates } from '../Data/data'

export default function SellTvSubscription() {
  return (
    <div className="content-page">
        <div className="content">
            <div className="container-fluid">
                <div className='row mt-4'>
                    <div className='col-md-8'>
                        <div className="card" style={{minHeight:"700px"}}>
                                    <div className="card-body">
                                        {/* <h4 className="header-title mb-3">Sell Electricity</h4> */}
                                        <form>
                                            <div id="progressbarwizard">
                                                <ul className="nav nav-pills bg-light nav-justified form-wizard-header mb-3">
                                                    <li className="nav-item">
                                                        <a href="#account-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2 active">
                                                            <i className="mdi mdi-account-circle me-1"></i>
                                                            <span className="d-none d-sm-inline">Enter Information</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#profile-tab-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                                                            <i className="mdi mdi-face-profile me-1"></i>
                                                            <span className="d-none d-sm-inline">Make Payment</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#finish-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                                                            <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                                            <span className="d-none d-sm-inline">View Receipts</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            
                                                <div className="tab-content b-0 mb-0 pt-0">
                                            
                                                    <div id="bar" className="progress mb-3" style={{height: "7px"}}>
                                                        <div className="bar progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: "33.3333%"}}></div>
                                                    </div>
                                            
                                                    <div className="tab-pane active" id="account-2">
                                                        <div className="row">
                                                            <div className="col-md-6  offset-md-3">
                                                            <div class="mb-4">
                                                                <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Sell Tv Subscription</h3> 
                                                                <h6 class="card-subtitle text-muted text-center">Cable tv subscription is easy. You can pay for tv subscription here</h6>
                                                            </div>
                                                                
                                                                <div className="row">
                                                                   <div className='col-md-12'>
                                                                    <div class="mb-2">
                                                                            <label for="contact">Provider</label>
                                                                            <select class="form-select" id="validationCustom04" required="">
                                                                                <option selected="" disabled="" value="">Choose...</option>
                                                                                {["DSTV", "GOTV", "Startimes",].map((network)=>(<option>{network}</option>))}
                                                                            </select>   
                                                                        </div>
                                                                   </div>
                                                                </div>
                                                                <div className="row">
                                                                   <div className='col-md-12'>
                                                                    <div class="mb-2">
                                                                            <label for="contact">Bundle</label>
                                                                            <select class="form-select" id="validationCustom04" required="">
                                                                                <option selected="" disabled="" value="">Choose...</option>
                                                                                {["DStv Premium French Plus Extraview. - ₦32300", "DStv Premium French - ₦29400", "DSTV CompactPlus French +Xtraview - ₦26550", "DStv Premium Asia HDPVR/XtraView - ₦26500"].map((network)=>(<option>{network}</option>))}
                                                                            </select>   
                                                                        </div>
                                                                   </div>
                                                                </div>
                                                                
                                                                <div className='row mb-2'>
                                                                    <div className='col-6'>
                                                                        <div class="">
                                                                        <label for="phone">Smart Card Number</label>
                                                                        <input class="form-control" id="phone" type="phone" placeholder="Enter Phone Number"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-6'>
                                                                        <div class="">
                                                                        <label for="phone">Customer Number</label>
                                                                        <input class="form-control" id="phone" type="phone" placeholder="Enter Notification Number" required="required"/>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="row mb-4">
                                                                    <div className="col-md-12">
                                                                        <label className="" for="email1">Email (optional)</label>
                                                                        <input type="email" id="email1" name="email1" className="form-control" placeholder='Enter Email Address'/>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 d-grid text-center">
                                                                    <button className="btn btn-primary" style={{height:"50px"}} type="submit" onClick={()=>{
                                                                        
                                                                    }}>CONFIRM </button>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                    </div>

                                                    <div className="tab-pane" id="profile-tab-2">
                                                        <div className="row">
                                                            <div className="col-md-6  offset-md-3">
                                                                <div class="mb-4">
                                                                    <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Make Payment</h3> 
                                                                    <h6 class="card-subtitle text-muted text-center">Confirm Your Purchase Details and make payment</h6>
                                                                </div>
                                                                <p className='mb-0 '>Provider</p>
                                                                {/* <h4 className='mt-0 ' style={{color:"#555"}}>DSTV</h4> */}
                                                                <img className='mb-2' src="assets/images/dstv.png" style={{width:"120px", height:"60px"}} alt="" height="50"/>
                                                                <p className='mb-0 '>Bundle</p>
                                                                <h3 className='mt-0 ' style={{color:"#555"}}>DStv Premium French Plus Extraview</h3>
                                                                <p className='mb-0 '>Amount</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>₦ 32,300.0</h4>
                                                                <p className='mb-0 '>Smart Card Number</p>
                                                                <h3 className='mt-0 ' style={{color:"#555"}}>701484674</h3>
                                                                <p className='mb-0 '>Customer Number</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>08137331445</h4>

                                                               
                                                                <div className='row mt-4'>
                                                                    <div className='col-6'>
                                                                        <button class="btn btn-outline-primary" id="prevBtn" type="button"  >Go Back</button>
                                                                    </div>
                                                                    <div className='col-6 text-end'>
                                                                        <button class="btn btn-primary " id="nextBtn" type="button" >Make Payment</button>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                    </div>

                                                    <div className="tab-pane" id="finish-2">
                                                        <div className="row">
                                                        <div className="col-md-6  offset-md-3">
                                                                <div class="mb-4">
                                                                    <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Transaction Summary</h3> 
                                                                    <h6 class="card-subtitle text-muted text-center">here is your purchase summary</h6>
                                                                </div>
                                                                <p className='mb-0 '>Smart Card Number</p>
                                                                <h3 className='mt-0 ' style={{color:"#8ca23b"}}>701484674</h3>
                                                                <p className='mb-0 '>Network Provider</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>DSTV</h4>
                                                                <p className='mb-0 '>Data Bundle</p>
                                                                <h3 className='mt-0 ' style={{color:"#555"}}>DStv Premium French Plus Extraview</h3>
                                                                <p className='mb-0 '>Total Amount</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>₦ 32,400.0</h4>
                                                                <p className='mb-0 '>Service Charge</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>₦ 100</h4>
                                                                <p className='mb-0 '>Transaction ID</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>435737490</h4>
                                                                <div className='row mt-4'>
                                                                    <div className='col-6'>
                                                                        <button class="btn btn-outline-primary" id="prevBtn" type="button"  >Print Reciept</button>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                    </div>


                                                </div>
                                            </div>
                                        </form>

                                    </div> 
                                </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card card-body bg-primary'>
                            <h4 className="card-title text-white"><i class="fe-credit-card"></i> Wallet balance</h4>
                            <h2 className="card-title text-white">N42,340</h2>
                            <p className="card-text text-dark"><a href="#" class="btn btn-outline-warning">Fund Wallet</a></p>
                        </div>
                        <div className="card">
                                            <div className="card-body h-100">
                                                
                                                <div className='dropdown float-end'> <a href='#'> View All</a></div>
                                                <h4 className="mt-0 mb-4 header-title">Last 5 Transactions</h4>
                                                <div className="table-responsive">
                                                    <table className="table table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Card No.</th>
                                                                <th>Bundle</th>
                                                                <th>Date</th>
                                                                <th>Print</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">7098645368</th>
                                                                <td>DSTV yanga</td>
                                                                <td>02-01-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">90836235628</th>
                                                                <td>DSTV Extra View</td>
                                                                <td>07-01-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">8638500389</th>
                                                                <td>GOTV premium</td>
                                                                <td>13-02-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">5373934850</th>
                                                                <td>Startimes mini</td>
                                                                <td>13-02-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">0948493732</th>
                                                                <td>GOTV max</td>
                                                                <td>11-03-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

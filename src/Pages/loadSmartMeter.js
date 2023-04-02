import React from 'react'
import { nigerianStates } from '../Data/data'

export default function LoadSmartMeter() {
  return (
    <div className="content-page">
        <div className="content">
            <div className="container-fluid">
                <div className='row mt-4'>
                    <div className='col-md-3'>
                    <div class="card card-inverse text-white"  style={{minHeight:"700px"}}>
                                    <img class="card-img img-fluid" style={{minHeight:"700px", objectFit:"cover", width:"100%"}} src="assets/images/smart-bg.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <h1 class="card-title text-white" style={{letterSpacing:"-2px"}}>RECHARGE <br></br> A SMART METER</h1>
                                        <div className='mb-3' style={{height:"4px",maxWidth:"60px", backgroundColor:"orange"}}></div>
                                        <p class="card-text" style={{fontSize:"18px"}}>Recharge your smart meters directly without the need to manually type in a recharge token.</p>
                                        
                                    </div>
                                </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="card" style={{minHeight:"700px"}}>
                                    <div className="card-body">
                                        {/* <h4 className="header-title mb-3">Sell Electricity</h4> */}
                                        <form>
                                            <div id="progressbarwizard">
                                                <ul className="nav nav-pills bg-light nav-justified form-wizard-header mb-3">
                                                    <li className="nav-item">
                                                        <a href="#account-2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2 active">
                                                            <i className="mdi mdi-account-circle me-1"></i>
                                                            <span className="d-none d-sm-inline">Information</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#profile-tab-confirm" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                                                            <i className="mdi mdi-face-profile me-1"></i>
                                                            <span className="d-none d-sm-inline">Verify</span>
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
                                                            <div className="col-md-8  offset-md-2">
                                                            <div class="mb-4">
                                                                <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Load Smart Meter</h3> 
                                                                <h6 class="card-subtitle text-muted text-center">Load any smart meter directly</h6>
                                                            </div>
                                                                <div className='row mb-2'>
                                                                    <div className='col-12'>
                                                                        <div class="">
                                                                        <label for="name">Meter Number</label>
                                                                        <input class="form-control" id="name" type="text" placeholder="Enter Meter Number" required="required"/>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="row">
                                                                   <div className='col-md-12'>
                                                                    <div class="mb-2">
                                                                            <label for="contact">State</label>
                                                                            <select class="form-select" id="validationCustom04" required="">
                                                                                <option selected="" disabled="" value="">Choose...</option>
                                                                                {nigerianStates.map((state)=>(<option>{state}</option>))}
                                                                            </select>   
                                                                        </div>
                                                                   </div>
                                                                </div>
                                                                
                                                                <div className='row mb-2'>
                                                                    <div className='col-6'>
                                                                        <div class="">
                                                                        <label for="name">Amount</label>
                                                                        <input class="form-control" id="name" type="text" placeholder="Purchase Amount" required="required"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-6'>
                                                                        <div class="">
                                                                        <label for="lname">Phone Number</label>
                                                                        <input class="form-control" id="lname" type="text" placeholder="Enter Phone Number"/>
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

                                                    <div className="tab-pane" id="profile-tab-confirm">
                                                        <div className="row">
                                                            <div className="col-md-8  offset-md-2">
                                                                <div class="mb-4">
                                                                    <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Verification</h3> 
                                                                    <h6 class="card-subtitle text-muted text-center">please provide the OTP sent to you</h6>
                                                                </div>
                                                                <label for="password" className="form-label">OTP</label>
                                                                <input className="form-control" type="password" required="" id="password" placeholder="Enter OTP"  onChange={(e)=>{
                                                              
                                                                }}/>
                                                                
                                                                
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
                                                    <div className="tab-pane" id="profile-tab-2">
                                                        <div className="row">
                                                            <div className="col-md-8  offset-md-2">
                                                                <div class="mb-4">
                                                                    <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Make Payment</h3> 
                                                                    <h6 class="card-subtitle text-muted text-center">Confirm Your Purchase Details and make payment</h6>
                                                                </div>
                                                                <p className='mb-0 '>Name</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>OSAWOTA .ANDI</h4>
                                                                <p className='mb-0 '>Meter Number</p>
                                                                <h3 className='mt-0 ' style={{color:"#555"}}>45700456986</h3>
                                                                <p className='mb-0 '>Current Smart Meter Unit</p>
                                                                <h3 className='mt-0 ' style={{color:"#8ca23b"}}>15.7KWh</h3>
                                                                <p className='mb-0 '>Address</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>HOUSE 7, 6932, ROAD ADKAN ESTATE, GWARIMPA Und St. Gwarimpa 2</h4>
                                                                <p className='mb-0 '>DISCO</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>Abuja Electricity Distribution Company</h4>
                                                                <p className='mb-0 '>Recharge Amount</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>₦ 932.9</h4>
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
                                                        <div className="col-md-8  offset-md-2">
                                                                <div class="mb-4">
                                                                    <h3 class="text-center mb-2" style={{letterSpacing: "-1px"}}>Transaction Summary</h3> 
                                                                    <h6 class="card-subtitle text-muted text-center">here is your purchase summary</h6>
                                                                </div>
                                                                
                                                                <p className='mb-0 '>No. of Units Recharged</p>
                                                                <h3 className='mt-0 ' style={{color:"#8ca23b"}}>106.4 KWh</h3>
                                                                <p className='mb-0 '>Current Total Units</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>122.1 KWh</h4>
                                                                <p className='mb-0 '>Meter Number</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>45700456986</h4>
                                                                <p className='mb-0 '>Name</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>OSAWOTA .ANDI</h4>
                                                                <p className='mb-0 '>Address</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>HOUSE 7, 6932, ROAD ADKAN ESTATE, GWARIMPA Und St. Gwarimpa 2</h4>
                                                                <p className='mb-0 '>Total Amount</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>₦ 1100</h4>
                                                                <p className='mb-0 '>Service Charge</p>
                                                                <h4 className='mt-0 ' style={{color:"#555"}}>₦ 100</h4>
                                                                <div className='row mt-2'>
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
                                                                <th>Meter No.</th>
                                                                <th>Amount</th>
                                                                <th>Date</th>
                                                                <th>Print</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">112243</th>
                                                                <td>N5,000</td>
                                                                <td>02-01-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">22414</th>
                                                                <td>N2,100</td>
                                                                <td>07-01-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">31112</th>
                                                                <td>N6,700</td>
                                                                <td>13-02-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">425278</th>
                                                                <td>N6,700</td>
                                                                <td>13-02-2023</td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">31112</th>
                                                                <td>N1,000</td>
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

import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { data } from '../Data/data';

export default function Dashboard() {
  return (
    <div className="content-page">
                <div className="content">

                    <div className="container-fluid">


                        {/* <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className='card'>
                                    <div className='card-body'>
                                        <h4 className="page-title-main">Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                        <div className="row mt-2">
                            <div className='col-md-6'>
                               
                                <div className="card card-body mb-3 card-inverse text-white" style={{backgroundColor: "#07368d", borderColor: "#07368d;"}}>
                                    <h3 className="card-title text-white">Welcome, Awesome Vendor </h3>
                                    <p className="card-text" style={{flex:"1 0 auto", flexDirection: "column"}}>VENDOR ID: 2571578</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last Login 3 mins ago</small>
                                    </p>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="card card-body">
                                                <h4 className="card-title"><i class="fe-credit-card"></i> Wallet</h4>
                                                <h2 className="card-title">N42,340</h2>
                                                <p className="card-text text-dark"><a href="#" class="btn btn-primary">Fund Wallet</a></p>

                                                <div className='mb-2' style={{height:"1px",backgroundColor:"#ddd"}}></div>
                                                <div className='row' style={{color:"#777"}}>
                                                    <div className='col-12'>
                                                        <p className="mb-0 ">Account Number</p>
                                                        <h3 className="mt-1 card-text ">8034568172 <a href='#'><i class="fe-copy" style={{marginLeft:"20px"}}></i></a></h3>
                                                    </div>
                                                    <div className='col-12 mt-2'>
                                                        <p className="mb-0 ">Bank Name</p>
                                                        <h4 className="mt-1  card-text ">WEMA BANK</h4>
                                                    </div>
                                                    <div className='col-12 mt-2'>
                                                        <p className="mb-0 ">Account Name</p>
                                                        <h4 className="mt-1 card-text ">payAfrik - Awesome Vendor</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-body ">
                                                <h4 className="card-title"><i class="fe-trending-up"></i> Profit</h4>
                                                <h2 className="card-title">N3,450</h2>
                                                <p className="card-text text-dark"><a href="#" class="btn btn-primary">Cash Out</a></p>

                                                
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                        
                                            <div className="card">
                                                
                                                <div className="card-body widget-user">
                                                    <div className="text-center">
                                                        <h2 className="fw-normal text-primary" data-plugin="counterup" style={{fontSize:"40px", fontWeight:"bold !important"}}>62,599</h2>
                                                        <h5>API CALLS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className='card' style={{width:"100%", height:"300px"}}>
                                                <h5 className="card-header">API Calls per Month</h5>
                                                <div className='card-body'>
                                                    <ResponsiveContainer>
                                                        <BarChart
                                                            width={250}
                                                            height={300}
                                                            data={data}
                                                            margin={{
                                                                top: 5,
                                                                right: 30,
                                                                left: 20,
                                                                bottom: 5,
                                                            }}
                                                            barGap={20}
                                                            barSize={10}
                                                            >
                                                            <CartesianGrid strokeDasharray="2 2" style={{opacity:"0.5"}} />
                                                            <XAxis dataKey="name"  style={{fontSize:"10px"}}/>
                                                            {/* <YAxis /> */}
                                                            <Tooltip />
                                                            {/* <Legend /> */}
                                                            
                                                            <Bar dataKey="uv" fill="#07368d" />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>  
                                            <div className="card card-body ">
                                                <h4 className="card-title"><i class="fas fa-key"></i> API Key</h4>
                                                <p className='text-dark mb-0' style={{fontSize:'15px'}}>PUBLIC-PYFRK-284-2HCSKSDBN-67SNJ<a href='#'><i class="fe-copy float-end" style={{marginLeft:"20px"}}></i></a></p>
                                                <p className='text-dark mt-0 mb-0' style={{fontSize:"10px"}}>KEEP THIS KEY PRIVATE. DO NOT SHARE</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        
                                        <div className="card">
                                            <div className="card-body h-100">
                                                <h4 className="header-title mt-0 mb-3">Transactions</h4>
                                                <div className="widget-box-2 text-end">
                                                    <div className="widget-detail-2">
                                                        <span className="badge bg-warning rounded-pill float-start mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
                                                        <h2 className="fw-normal mb-1" style={{fontSize:"40px", fontWeight:"bold !important"}}> 9,841 </h2>
                                                        <p className="text-muted mb-3">Transactions this month</p>
                                                    </div>
                                                    <div className="progress progress-bar-alt-warning progress-sm">
                                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%;"}}>
                                                            <span className="visually-hidden">77% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className='col-md-6 '>
                                    
                                        <div className="card">
                                            <div className="card-body h-100">
                                                
            
                                                <h4 className="header-title mt-0 mb-3">Transaction Amount</h4>
            
                                                <div className="widget-box-2">
                                                    <div className="widget-detail-2 text-end">
                                                        <span className="badge bg-primary rounded-pill float-start mt-3">32% <i className="mdi mdi-trending-up"></i> </span>
                                                        <h2 className="fw-normal mb-1" style={{fontSize:"40px", fontWeight:"bold !important"}}> N47,540 </h2>
                                                        <p className="text-muted mb-3">Amount this month</p>
                                                    </div>
                                                    <div className="progress progress-bar-alt-primary progress-sm">
                                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%;"}}>
                                                            <span className="visually-hidden">77% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className='col-md-12 '>
                                    
                                        <div className="card">
                                            <div className="card-body h-100">
                                                
                                                <div className='dropdown float-end'> <a href='#'> View All</a></div>
                                                <h4 className="mt-0 mb-4 header-title">Last 5 Transactions</h4>
                                                <div className="table-responsive">
                                                    <table className="table table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#ID</th>
                                                                <th>Trans. Type</th>
                                                                <th>Amount</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Print</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">112243</th>
                                                                <td>Power Transaction</td>
                                                                <td>N5,000</td>
                                                                <td>02-01-2023</td>
                                                                <td><span class="badge bg-success">Completed</span></td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">22414</th>
                                                                <td>VTU Transaction</td>
                                                                <td>N2,100</td>
                                                                <td>07-01-2023</td>
                                                                <td><span class="badge bg-success">Completed</span></td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">31112</th>
                                                                <td>Power Transaction</td>
                                                                <td>N6,700</td>
                                                                <td>13-02-2023</td>
                                                                <td><span class="badge bg-danger">Failed</span></td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">425278</th>
                                                                <td>Power Transaction</td>
                                                                <td>N6,700</td>
                                                                <td>13-02-2023</td>
                                                                <td><span class="badge bg-success">Completed</span></td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">31112</th>
                                                                <td>VTU Transaction</td>
                                                                <td>N1,000</td>
                                                                <td>11-03-2023</td>
                                                                <td><span class="badge bg-warning">Pending</span></td>
                                                                <td className='text-center'><a href='#'><i class="fe-printer" style={{fontSize:"20px"}}></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                                    <div className='col-md-12'>
                                        
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <div className='card h-100 '>
                                                        <h4 className="card-header bg-primary text-white" style={{fontSize:"15px"}}>Refer Vendor &amp; Earn N1,500</h4>
                                                        <div className='card-body pt-0 pb-1'>
                                                            <p className='text-dark mb-0 mt-1' style={{fontSize:'13px'}}>Referral Code</p>
                                                            <p className='text-dark mb-1' style={{fontSize:'15px',fontWeight:"bold"}}>AWSME12356</p>
                                                            <p className='mb-0 '><a href='#'>COPY<i class="fe-copy" style={{marginLeft:"10px"}}></i></a><a style={{marginLeft:"25px"}} href='#'>SHARE<i class="fe-share" style={{marginLeft:"10px"}}></i></a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='card h-100 '>
                                                        <h4 className="card-header" style={{fontSize:"15px"}}>Total Referrals Made</h4>
                                                        <div className='card-body h-100 pt-0 pb-1'>
                                                            <p className='text-dark mb-2' style={{fontSize:'25px'}}><span style={{fontWeight:"bold"}}>0</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='card h-100 '>
                                                        <h4 className="card-header" style={{fontSize:"15px"}}>Current Referral Bonus</h4>
                                                        <div className='card-body h-100 pt-0 pb-1'>
                                                            <p className='text-dark mb-1' style={{fontSize:'25px'}}><span style={{fontWeight:"bold"}}>N0.00</span></p>
                                                            <p className="card-text mb-0 text-dark"><a href="#" class="btn btn-primary">Cash Out</a></p>

                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                                
                        </div>
                        
                    </div> 
                    

                </div> 

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> &copy; PayAfrik Super Vendor 2023 <a href="#"> by PayAfrik Limited</a> 
                            </div>
                            
                        </div>
                    </div>
                </footer>

            </div>
  )
}

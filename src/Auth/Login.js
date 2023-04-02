import React, { useEffect, useState } from 'react'
import axios from "axios";
import { changeTitle, checkIfLogin, fixDropdownName, getLoggedInRole, reverseFixDropdownName } from '../functions/reusables';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen'

export default function Login() {

  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [organizations, setOrganization] = useState([]);
  const [orgRoleText, setOrgRoleText] = useState("");
  const [orgRole, setOrgRole] = useState(0);
  const [orgId, setOrgID] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);



  const loginUser = async () => {

    setLoading(true);
    setErrorMessage("")
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      email: email,
      password: password,
      org_pid: parseInt(orgId),
      org_role: parseInt(orgRole)
    };

    console.log(data)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}auth/login/${orgRoleText}/`,
        data,
        {
          headers: headers,
        }
      );

    console.log(response.data)
    // localStorage.setItem("user_detail", JSON.stringify(response.data));
    // navigate(`/${getLoggedInRole()}-dashboard`);
      
    } catch (error) {
      console.log(error.response?.data?.message);
      setErrorMessage(error.response.data?.message)
      setLoading(false);
    }
  };

  const checkIfUserIsLoggedIn = async () => {
    let isLogin =   await checkIfLogin()
    if (isLogin) {
      navigate(`/${getLoggedInRole()}-dashboard`);
    } else {
      navigate("/");
      // setPageLoading(false);
    }
  }

  const performLoginTasks = async () =>{
    changeTitle("Login | PayAfrik")
    // await checkIfUserIsLoggedIn()
    // await fetchRoles()
    // await fetchOrganization()
    setLoading(false)
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
    <div className=" authentication-bg authentication-bg-pattern" style={{minHeight:'100vh'}}>
       <div className="account-pages" style={{paddingTop:'100px', paddingBottom:'100px'}}> 
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        
                        <div className="card">
                        <div className="text-center mt-4">   
                            <a href="index.html">
                                <img src="assets/images/logo-dark.png" alt="" height="70" className="mx-auto"/>
                            </a>
                            <p className="text-muted">PayAfrik Vendor Dashboard</p>

                        </div>
                            <div className="card-body p-4">
                                
                                <div className="text-center mb-4">
                                    <h4 className="text-uppercase mt-0">Sign In</h4>
                                </div>

                                <div >
                  
                                    {/* <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>{
                                          setOrgRoleText(reverseFixDropdownName(e.target.options[e.target.selectedIndex].text))
                                          setOrgRole(e.target.value)
                                        }}>
                                            <option selected="">Choose a user</option>
                                            {
                                              roles.map((role)=>(
                                                <option value={role[1]}>{fixDropdownName(role[0])}</option>
                                              ))
                                            }
                                        </select>
                                        <label for="floatingSelect">User Role</label>
                                    </div> */}
                                    {/* <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>{
                                          setOrgID(e.target.value)
                                        }}>
                                            <option selected="">Choose Organization</option>
                                            {
                                              organizations.map((organization)=>(
                                                <option value={organization["org_pid"]}>{organization["org_name"]}</option>
                                              ))
                                            }
                                        </select>
                                        <label for="floatingSelect">Organization</label>
                                    </div> */}
                                    
                                    <div className="mb-3">
                                        <label for="emailaddress" className="form-label">Email address</label>
                                        <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" onChange={(e)=>{
                                          setErrorMessage("")
                                          setEmail(e.target.value)
                                        }}/>
                                    </div>

                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input className="form-control" type="password" required="" id="password" placeholder="Enter your password"  onChange={(e)=>{
                                           setErrorMessage("")
                                          setPassword(e.target.value)
                                        }}/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkbox-signin" checked />
                                            <label className="form-check-label" for="checkbox-signin">Remember me</label>
                                        </div>
                                    </div>
                                    {errorMessage != "" ?<div className="card text-white bg-danger">
                                        <div className="card-body" style={{padding:'10px 10px', textAlign:'center'}}>
                                                <p>{errorMessage}</p>
                                        </div>
                                    </div> : <div></div>}
                                    <div className="mb-3 d-grid text-center">
                                        <button className="btn btn-primary" type="submit" onClick={()=>{
                                            navigate("/dashboard")
                                        }}> Log In </button>
                                    </div>
                                    <p className="mt-4 mb-0 text-center">Don't have an account?<Link to={"/register"} className="ms-2">Register Here </Link></p>
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

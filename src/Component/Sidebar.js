import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { clearStorage, fixDropdownName, getLoggedInRole, getUser } from '../functions/reusables';

export default function Sidebar() {
    const navigate = useNavigate(); 
    let vendorsMenu = [
        { name: "FEATURE" },
        { name: "Dashboard", link: `/dashboard`, sub: [], icon:"mdi mdi-view-dashboard-outline" },
        { name: "Sell Electricity", link: `/sell-electricity`, sub: [], icon:"fe-zap" },
        { name: "Sell Airtime", link: `/sell-airtime`, sub: [], icon:"fe-smartphone" },
        { name: "Sell Data", link: `/sell-data`, sub: [], icon:"fe-bar-chart-line" },
        { name: "Sell TV Subscription", link: `/sell-tv-subscription`, sub: [], icon:"fe-tv" },
        { name: "Referral", link: `/referral`, sub: [], icon:"fe-link" },
        { name: "MANAGEMENT" },
        {
            name: "Smart Control",
            icon:"fe-cpu",
            sub: [
              { name: "Load Smart Meter", link: `/load-smart-meter` },
              { name: "Monitor Usage", link: `/monitor-usage` },
            ],
            
          },
        {
          name: "Wallet",
          icon:"fas fa-wallet",
          sub: [
            { name: "Wallet Transaction", link: `/wallet-transaction` },
            { name: "Fund Wallet", link: `/fund-wallet` },
          ],
          
        },
        { name: "Transaction History", link: `/transaction-history`, sub: [], icon:"fas fa-history" },
        { name: " Users", link: `/users`, sub: [], icon:"fas fa-users" },
        { name: "Profile Settings", link: `/profile-settings`, sub: [], icon:"fas fa-user-circle" },
        
    ];


   

      const [selectedMenu, setSelectedMenu] = useState("");
      const [selectedSubMenu, setSelectedSubMenu] = useState("");

      const toggleSelectedMenu = (menu) => {
        if(selectedMenu != menu){
            setSelectedMenu(menu)
        }else{
            setSelectedMenu("")
        }
      }
    useEffect(() => {
        console.log(getUser())
      }, []);
  return (
    <div id="wrapper">
            <div className="navbar-custom " style={{backgroundColor:"#fff"}}>
                    <ul className="list-unstyled topnav-menu float-end mb-0">
                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle"/>
                                <span className="pro-user-name ms-1">
                                Awesome Vendor <i className="mdi mdi-chevron-down"></i> 
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>
    
                                <a href="contacts-profile.html" className="dropdown-item notify-item">
                                    <i className="fe-user"></i>
                                    <span>My Account</span>
                                </a>
    
                                
                                <div className="dropdown-divider"></div>
    
                                <button  className="dropdown-item notify-item" onClick={()=>{
                                    clearStorage()
                                    navigate("/")
                                }}>
                                    <i className="fe-log-out"></i>
                                    <span>Logout</span>
                                </button>
    
                            </div>
                        </li>
    
                        
    
                    </ul>
    
                    <div className="logo-box">
                        <a href="index.html" className="logo logo-light text-center">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="50"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="50"/>
                            </span>
                        </a>
                        <a href="index.html" className="logo logo-dark text-center">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="50"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="50"/>
                            </span>
                        </a>
                    </div>

                    <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
                        <li>
                            <button className="button-menu-mobile disable-btn waves-effect">
                                <i className="fe-menu"></i>
                            </button>
                        </li>
    
                        <li>
                            <h4 className="page-title-main " style={{lineHeight:'70px'}}>Dashboard</h4>
                        </li>
            
                    </ul>

                    <div className="clearfix"></div> 
               
            </div>

            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <div className="left-side-menu" style={{backgroundColor:"#00256a"}}>

                <div className="h-100" data-simplebar>

                    <div className="user-box text-center"  >

                        <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail avatar-md"/>
                            <div className="dropdown">
                                <a href="#" className="user-name text-white dropdown-toggle h5 mt-2 mb-1 d-block" data-bs-toggle="dropdown"  aria-expanded="false">Awesome Vendor</a>
                            </div>

                        <p className="text-muted left-user-info">08088191618</p>

                    </div>
                    <div style={{width:'100%', marginTop:'15px', marginBottom:'15px',  height:'1px', backgroundColor:'#f5f5f530'}}></div>
                    <div id="sidebar-menu">

                        <ul id="side-menu">
                            {
                                vendorsMenu.map((menu)=>{

                                    if(menu.name === "FEATURE" || menu.name === "MANAGEMENT") return <li className="menu-title">{menu.name}</li>
                                    return <li key={ menu.name} >
                                        {menu.sub.length == 0 ?
                                        <Link className="text-white" style={{backgroundColor:selectedMenu == menu.name ?"orange":'initial'}} to={menu.link} onClick={()=>{
                                            setSelectedMenu(menu.name)
                                            setSelectedSubMenu("")
                                        }}>
                                            <i className={menu.icon}></i>
                                            <span>{ menu.name }</span>
                                        </Link>:
                                        <a href='#' data-bs-toggle="collapse"  className={selectedMenu == menu.name ? 'collapsed text-white':'text-white'} aria-expanded={selectedMenu == menu.name ? 'true':'false'} onClick={()=>{
                                            toggleSelectedMenu(menu.name)
                                        }}>
                                            <i className={menu.icon}></i>
                                            <span>{ menu.name }</span>
                                            <span className="menu-arrow"></span>
                                        </a>}
                                        {menu.sub.length !== 0 ? <div  id="email" className={selectedMenu == menu.name ? 'collapse show':'collapse text-white'} >
                                            <ul className="nav-second-level">
                                                {menu.sub.map((submenu)=>(
                                                    <li className={selectedSubMenu == submenu.name ? 'active':''} onClick={()=>{
                                                        setSelectedSubMenu(submenu.name)
                                                    }}>
                                                        <Link className="text-white" to={submenu.link}>{submenu.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>: <div></div>}
                                       
                                    </li>
                                    })
                            }
                            

                            {/* <li>
                                <a href="#email" data-bs-toggle="collapse">
                                    <i className="mdi mdi-email-outline"></i>
                                    <span> Email </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="email">
                                    <ul className="nav-second-level">
                                        <li>
                                            <a href="email-inbox.html">Inbox</a>
                                        </li>
                                        <li>
                                            <a href="email-templates.html">Email Templates</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}

                            
                        </ul>

                    </div>

                    <div className="clearfix"></div>

                </div>

            </div>
    </div>
  )
}

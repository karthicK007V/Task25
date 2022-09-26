import React,{useState} from 'react';
import { Collapse } from 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Ima from './img/undraw_rocket.svg'

import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

const Sidebar = () => {
    const [toggle, settoggle] = useState(false);
    const[utti,setutti]=useState(false);
    const [page,setpage]=useState(false);
    const handle=()=>{
        settoggle(!toggle);
    var colla=document.getElementById("collapseTwo");
    var bccoll=new Collapse(colla);
    toggle?bccoll.show():bccoll.hide()
    };
    const handelu=()=>{
        setutti(!utti);
        var col=document.getElementById("collapseUtilities");
        var neco=new Collapse(col);
        utti?neco.show():neco.hide();
        
    }
    const handelpage=()=>{
        setpage(!page);
        var pa=document.getElementById("collapsePages");
        var pagcol=new Collapse(pa);
        page?pagcol.show():pagcol.hide();
    }
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>


                <hr className="sidebar-divider my-0" />


                <li className="nav-item active">

                    <Link to="/" className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>

                        <span>Dashboard
                        </span>
                    </Link>

                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">
                    Interface
                </div>
               

                <li className="nav-item">
                    <a   className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo" onClick={handle}>
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link to="/button"  className="collapse-item" href="">Buttons</Link>
                            <Link to="/card"   className="collapse-item" href="">Cards</Link>
                        </div>
                    </div>
                </li>


                <li className="nav-item">
                    <a   to='/utility' className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities"  onClick={ handelu}>
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link  to='/color' className="collapse-item" href="">Colors</Link>
                            <Link to='/border' className="collapse-item" href="">Borders</Link>
                            <Link  to='anim' className="collapse-item" href="">Animations</Link>
                            <Link to="other" className="collapse-item" href="">Other</Link>
                        </div>
                    </div>
                </li>


                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Addons
                </div>


                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages" onClick={handelpage}>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link to='/login' className="collapse-item" href="login.html">Login</Link>
                            <Link to='/reg' className="collapse-item" href="register.html">Register</Link>
                            <Link to='/forget' className="collapse-item" href="forgot-password.html">Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to='/404' className="collapse-item" href="404.html">404 Page</Link>
                            <Link to="blank" className="collapse-item" href="blank.html">Blank Page</Link>
                        </div>
                    </div>
                </li>
              


                <li className="nav-item">
                    <Link to="/charts" className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>


                <li className="nav-item">
                    <Link  to='/table'  className="nav-link" >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>


                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>


                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src={Ima} alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>

            </ul>
        </>
    );
}

export default Sidebar;

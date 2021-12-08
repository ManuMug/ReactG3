import React from 'react';
import image from '../assets/images/logo-w.png';
import ContentWrapper from './ContentWrapper';
import Catalog from './Catalog';
import LastProduct from './LastProduct';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from "react"
import ContentRowTop from './ContentRowTop';
import ContentRowMovies from './ContentRowMovies';





function SideBar() {
    
  const [products, setProducts] = useState([]);

  const getData = async () => {
    await fetch('http://localhost:3020/api/products')
    .then(response => response.json())
      .then(data => setProducts(data));
    }

  useEffect(() => {
  getData()    
  }, [])

    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav  sidebar sidebar-dark accordion  fondo-sidebar" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Sport Shoes"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Sport Shoes</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Catalog">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Catalog</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProduct">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last Product</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContactUs">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Contact Us </span></Link>
                </li>
                {/*<!-- Nav Item - ContentRowMovies  -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>ContentRowMovies </span></Link>
                </li>


                    
                
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/Catalog">
                    <Catalog products={products}/>
                </Route>
                <Route path="/LastProduct">
                    <LastProduct />
                </Route>
                <Route path="/ContactUs">
                    <ContactUs />
                    
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies products={products}/>                    
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;
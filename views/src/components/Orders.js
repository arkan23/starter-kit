import React, { Component } from 'react';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';

import SBleft from './SBleft';
import SBright from './SBright';
import Navigate from './Navbar';
import Topbar from './Topbar';
import Infobar from './Infobar';

import Neworder from './orders/Neworder';
import Orderlist from './orders/Orderlist';


class Orders extends Component{
  render(){
    return(
      <div>
        <SBleft/>
        <SBright/>
        <div id="loading">
            <div className="svg-icon-loader">
              <img src="../bin/assets/images/svg-loaders/bars.svg" width="40" alt=""/>
            </div>
        </div>
        <div id="page-wrapper">
          <div id="mobile-navigation">
            <button id="nav-toggle" className="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
          </div>
        <Navigate/>
        <div id="page-content-wrapper">
          <div id="page-content">
              <Topbar/>
              <Infobar/>
              <div className="row">
                <div className="col-md-12">
                  <Orderlist/>
                  <Neworder/>
                </div>
              </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}
export default Orders;

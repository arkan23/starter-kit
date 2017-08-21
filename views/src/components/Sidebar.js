import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends Component{

  render(){
    return(
      <div className="col-md-2 col-sm-1 hidden-xs dtc valign-top" id="side-menu">
          <h1 className="hidden-sm hidden-xs">Navigation</h1>
          <ul>
            <li className="link active">
              <Link to="/" >
                <i className="fa fa-th" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Dashboard</span>
              </Link>
            </li>


            <li className="link">
              <Link to="#collapse-post" data-toggle="collapse" aria-control="collapse-post">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Manufactory</span>
                <span className="label label-success pull-right hidden-sm hidden-xs">10</span>
              </Link>
              <ul className="collapse collapseable" id="collapse-post">
                <li><Link to="articles.html">Hedelberg</Link></li>
                <li><Link to="articles.html">Comp</Link></li>
                <li><Link to="articles.html">Hedel</Link></li>
              </ul>
            </li>

            <li className="link">
              <Link to="#collapse-comm" data-toggle="collapse" aria-control="collapse-comm">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Commenters</span>
              </Link>
              <ul className="collapse collapseable" id="collapse-comm">
                <li>
                  <Link to="chats.html">Chats<span className="label label-success pull-right hidden-sm hidden-xs">5</span></Link>
                </li>
                <li>
                  <Link to="users.html">Users<span className="label label-warning pull-right hidden-sm hidden-xs">5</span></Link>
                </li>
              </ul>
            </li>

            <li className="link">

              <Link to={"/plans"}>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Plans</span>
              <span className="label label-success pull-right hidden-sm hidden-xs">10</span>
              </Link>
            </li>

            <li className="link">
              <Link to="/store">
                <i className="fa fa-cubes" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Store</span>
              </Link>
            </li>

            <li className="link settings-btn">
              <Link to="#collapse-mode" data-toggle="collapse" aria-control="collapse-mode">
                <i className="fa fa-wrench" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Admin mode</span>
              </Link>
              <ul className="collapse collapseable" id="collapse-mode">
                <li><Link to="articles.html">Settings</Link></li>
                <li><Link to="articles.html">Commands</Link></li>

              </ul>
            </li>
          </ul>
        </div>
    )
  }
}


/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default Sidebar;

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
              <a href="/" >
                <i className="fa fa-th" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Dashboard</span>
              </a>
            </li>


            <li className="link">
              <a href="#collapse-post" data-toggle="collapse" aria-control="collapse-post">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Manufactory</span>
                <span className="label label-success pull-right hidden-sm hidden-xs">10</span>
              </a>
              <ul className="collapse collapseable" id="collapse-post">
                <li><a href="articles.html">Hedelberg</a></li>
                <li><a href="articles.html">Comp</a></li>
                <li><a href="articles.html">Hedel</a></li>
              </ul>
            </li>

            <li className="link">
              <a href="#collapse-comm" data-toggle="collapse" aria-control="collapse-comm">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Commenters</span>
              </a>
              <ul className="collapse collapseable" id="collapse-comm">
                <li>
                  <a href="chats.html">Chats<span className="label label-success pull-right hidden-sm hidden-xs">5</span></a>
                </li>
                <li>
                  <a href="users.html">Users<span className="label label-warning pull-right hidden-sm hidden-xs">5</span></a>
                </li>
              </ul>
            </li>

            <li className="link">
              <a href="/plans">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Plans</span>
              <span className="label label-success pull-right hidden-sm hidden-xs">10</span>
              </a>
            </li>

            <li className="link">
              <a href="/store">
                <i className="fa fa-cubes" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Store</span>
              </a>
            </li>

            <li className="link settings-btn">
              <a href="#collapse-mode" data-toggle="collapse" aria-control="collapse-mode">
                <i className="fa fa-wrench" aria-hidden="true"></i>
                <span className="hidden-sm hidden-xs">Admin mode</span>
              </a>
              <ul className="collapse collapseable" id="collapse-mode">
                <li><a href="articles.html">Settings</a></li>
                <li><a href="articles.html">Commands</a></li>

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

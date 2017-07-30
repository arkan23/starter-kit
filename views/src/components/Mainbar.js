import React, { Component } from 'react';
import { connect } from 'react-redux';


class Mainbar extends Component{

  render(){
    return(
      <div className="col-md-10 col-sm-11 dtc valign-top">
        <div className="row">
          <header id="nav-header" className="clearfix">
            <div className="col-md-5">
              <nav className="navbar-default">

                <button className=" pull-left navbar-toggle navbar-toggle-left" type="button" data-toggle="offcanvas" data-target="#side-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

              </nav>
              <input type="text" id="header-search" className="hidden-sm hidden-xs" placeholder="Searchfor something..."/>
            </div>
            <div className="col-md-7">
              <ul className="pull-right">
                <li id="welcome" className="hidden-sm hidden-xs">Welcome to your administration area</li>
                <li className="fixed-width">
                  <a href="#">
                    <i className="fa fa-bell" aria-hidden="true"></i>
                    <span className="label label-warning ">3</span>
                  </a>
                </li>
                <li className="fixed-width">
                  <a href="#">
                    <i className="fa fa-map" aria-hidden="true"></i>
                    <span className="label label-message">3</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                    log out
                  </a>
                </li>
              </ul>
            </div>
          </header>
        </div>




        <div className="content">
            <div className="counter container-fluid">
              <div className="row">
                <div className="col-md-2 counter-right-border">
                  <span className="count_top"><i className="fa fa-user"></i> Total Users</span>
                  <div className="count">2500</div>
                  <span className="count_bottom"><i className="green">4% </i> From last Week</span>
                </div>
                <div className="col-md-2 counter-right-border">
                  <span className="count_top"><i className="fa fa-clock-o"></i> Average Time</span>
                  <div className="count">123.50</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> From last Week</span>
                </div>
                <div className="col-md-2 counter-right-border">
                  <span className="count_top"><i className="fa fa-user"></i> Total Males</span>
                  <div className="count green">2,500</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                </div>
                <div className="col-md-2 counter-right-border">

                  <span className="count_top"><i className="fa fa-user"></i> Total Females</span>
                  <div className="count">4,567</div>
                  <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
                </div>
                <div className="col-md-2 counter-right-border">
                  <span className="count_top"><i className="fa fa-user"></i> Total Collections</span>
                  <div className="count">2,315</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                </div>
                <div className="col-md-2">
                  <span className="count_top"><i className="fa fa-user"></i> Total Connections</span>
                  <div className="count">7,325</div>
                  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                </div>
              </div>
            </div>


            <div className="counter container-fluid graf-size">
              <div className="row graf-size">
                <div className="col-md-12">
                  <div id="chartdiv"></div>
                </div>
              </div>
            </div>



            <div className="container-fluid sub-graf-size">
              <div className="row">
                <div className="col-md-4 col-md-4-left">
                  <div className="sub-graf"><p>Test text</p></div>
                </div>
                <div className="col-md-4">
                  <div className="sub-graf"><p>Test text</p></div>
                </div>
                <div className="col-md-4 col-md-4-right" >
                  <div className="sub-graf"><p>Test text</p></div>
                </div>
              </div>
            </div>

        </div>









        <div className="row">
          <footer id="admin-footer">
            <div className="pull-left"><b>Copyright </b>&copy; 2017</div>
            <div className="pull-right">admin system</div>
          </footer>

        </div>



      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
        activeItem: state.lists.item
    };
}

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default Mainbar;

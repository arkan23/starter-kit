import React, { Component } from 'react';

class Dashstatic extends Component{
  render(){
    return(
      <div className="dashboard-box dashboard-box-chart bg-white content-box">
        <div className="content-wrapper">
          <div className="header">8960 <span>Total Downloads<b>in last</b> 6 years</span></div>
          <div className="bs-label bg-orange">~51%</div>
          <div className="center-div sparkline-big-alt">2210,2310,2010,2310,2123,2350</div>
          <div className="row list-grade">
            <div className="col-md-2">2009</div>
            <div className="col-md-2">2010</div>
            <div className="col-md-2">2011</div>
            <div className="col-md-2">2012</div>
            <div className="col-md-2">2013</div>
            <div className="col-md-2">2014</div>
          </div>
        </div>
        <div className="button-pane">
            <div className="size-md float-left">
              <a href="#" title="">View more details</a>
            </div>
            <a href="#" className="btn btn-primary float-right tooltip-button" data-placement="top" title="View details"><i className="glyph-icon icon-caret-right"></i></a>
          </div>
        </div>
          )
        }
      }
      export default Dashstatic;

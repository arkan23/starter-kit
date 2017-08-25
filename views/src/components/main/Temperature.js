import React, { Component } from 'react';

class Temperature extends Component{
  render(){
    return(
      <div className="panel-layout">
        <div className="panel-box col-xs-6">
          <div className="panel-content bg-white">
            <canvas id="icon-cloud" width="80" height="80"></canvas>
          </div>
          <div className="panel-content bg-black">
            <div className="center-vertical">
              <ul className="center-content nav nav-justified">
                <li><h4><i className="glyph-icon font-green opacity-80 icon-chevron-down"></i> 7 º</h4><p className="opacity-80 text-transform-upr font-size-11 mrg5T">Low</p></li>
                <li><h4><i className="glyph-icon font-red opacity-80 icon-chevron-up"></i> 21 º</h4><p className="opacity-80 text-transform-upr font-size-11 mrg5T">High</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel-box col-xs-6 bg-blue-alt">
          <div className="panel-content">
            <h3>San Francisco</h3>
            <h4 className="opacity-60">California</h4>
          </div>
        </div>
      </div>
          )
        }
      }
      export default Temperature;

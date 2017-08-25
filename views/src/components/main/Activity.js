
import React, { Component } from 'react';

class Activity extends Component{
  render(){
    return(
      <div className="panel">
        <div className="panel-body">
          <h3 className="title-hero">Users activity</h3>
          <div className="example-box-wrapper">
            <div className="timeline-box timeline-box-left">
              <div className="tl-row">
                <div className="tl-item float-right">
                  <div className="tl-icon bg-red">
                    <i className="glyph-icon icon-toggle-on"></i>
                  </div>
                  <div className="popover right">
                    <div className="arrow"></div>
                    <div className="popover-content">
                      <div className="tl-label bs-label label-info">Appointment</div>
                      <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                      <div className="tl-time"><i className="glyph-icon icon-clock-o"></i> a few seconds ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-item float-right">
                  <div className="tl-icon bg-primary">
                    <i className="glyph-icon icon-wifi"></i>
                  </div>
                  <div className="popover right">
                    <div className="arrow"></div>
                    <div className="popover-content">
                      <div className="tl-label bs-label bg-yellow">Teleconference</div>
                      <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                      <div className="tl-time"><i className="glyph-icon icon-clock-o"></i> a few seconds ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-item float-right">
                  <div className="tl-icon bg-black">
                    <i className="glyph-icon icon-headphones"></i>
                  </div>
                  <div className="popover right">
                    <div className="arrow"></div>
                    <div className="popover-content">
                      <div className="tl-label bs-label label-danger">Meeting</div>
                      <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                      <div className="tl-time"><i className="glyph-icon icon-clock-o"></i> a few seconds ago</div>
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
      }
export default Activity;

import React, { Component } from 'react';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
class Topbar extends Component{
  render(){
    return(
      <div id="page-header">
        <div id="header-nav-left">
          <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
            <i className="glyph-icon icon-linecons-lock"></i>
          </a>
          <div className="user-account-btn dropdown">
            <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
              <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image"/>
              <span>Michael Lee</span>
              <i className="glyph-icon icon-angle-down"></i>
            </a>
            <div className="dropdown-menu float-right">
              <div className="box-sm">
                <div className="login-box clearfix">
                  <div className="user-img">
                    <a href="#" title="" className="change-img">Change photo</a>
                    <img src="../bin/assets/image-resources/gravatar.jpg" alt=""/>
                  </div>
                  <div className="user-info">
                    <span>Michael Lee <i>UX/UI developer</i></span>
                    <a href="#" title="Edit profile">Edit profile</a>
                    <a href="#" title="View notifications">View notifications</a>
                  </div>
                </div>
                <div className="divider"></div>
                <ul className="reset-ul mrg5B">
                  <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                  <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                  <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                </ul>
                <div className="button-pane button-pane-alt pad5L pad5R text-center">
                  <a href="#" className="btn btn-flat display-block font-normal btn-danger">
                    <i className="glyph-icon icon-power-off"></i> Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-nav-right">
          <a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search">
            <i className="glyph-icon icon-search"></i>
          </a>
          <div className="hide" id="popover-search">
            <div className="pad5A box-md">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search terms here ..."/>
                <span className="input-group-btn">
                  <a className="btn btn-primary" href="#">Search</a>
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown" id="dashnav-btn">
            <a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu">
              <i className="glyph-icon icon-linecons-cog"></i>
            </a>
            <div className="dropdown-menu float-left">
              <div className="box-sm">
                <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                  <a href="#" className="btn vertical-button hover-blue-alt" title="">
                    <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard
                  </a>
                  <a href="#" className="btn vertical-button hover-green" title="">
                    <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets
                  </a>
                  <a href="#" className="btn vertical-button hover-orange" title="">
                    <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables
                  </a>
                  <a href="#" className="btn vertical-button hover-orange" title="">
                    <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts
                  </a>
                  <a href="#" className="btn vertical-button hover-purple" title="">
                    <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons
                  </a>
                  <a href="#" className="btn vertical-button hover-azure" title="">
                    <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels
                  </a>
                </div>
                <div className="divider"></div>
                <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                  <a href="#" className="btn vertical-button remove-border btn-info" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a>
                  <a href="#" className="btn vertical-button remove-border btn-danger" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a>
                  <a href="#" className="btn vertical-button remove-border btn-purple" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a>
                  <a href="#" className="btn vertical-button remove-border btn-azure" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a>
                  <a href="#" className="btn vertical-button remove-border btn-yellow" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a>
                  <a href="#" className="btn vertical-button remove-border btn-warning" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen">
            <i className="glyph-icon icon-arrows-alt"></i>
          </a>
          <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar">
            <i className="glyph-icon icon-linecons-paper-plane"></i>
          </a>
          <div className="dropdown" id="notifications-btn">
            <a data-toggle="dropdown" href="#" title="">
              <span className="small-badge bg-yellow"></span>
              <i className="glyph-icon icon-linecons-megaphone"></i>
            </a>
            <div className="dropdown-menu box-md float-left">
              <div className="popover-title display-block clearfix pad10A">Notifications <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a></div>
                <div className="scrollable-content scrollable-slim-box">
                                <ul className="no-border notifications-box">
                                  <li><span className="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-warning icon-notification glyph-icon icon-users"></span> <span className="notification-text font-blue">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-green icon-notification glyph-icon icon-sitemap"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-azure icon-notification glyph-icon icon-random"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-blue icon-notification glyph-icon icon-user"></span> <span className="notification-text font-blue">Alternate notification styling.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-green icon-notification glyph-icon icon-user"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                  <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                </ul>
                              </div>
                              <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                                <a href="#" className="btn btn-flat btn-primary" title="View all notifications">View all notifications</a>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown" id="progress-btn">
                            <a data-toggle="dropdown" href="#" title=""><span className="small-badge bg-azure"></span> <i className="glyph-icon icon-linecons-params"></i></a>
                            <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                              <div className="scrollable-content scrollable-slim-box">
                                <ul className="no-border progress-box progress-box-links">
                                  <li><a href="#" title=""><div className="progress-title">Finishing uploading files <b>23%</b></div><div className="progressbar-smaller progressbar" data-value="23"><div className="progressbar-value bg-blue-alt"><div className="progressbar-overlay"></div></div></div></a></li>
                                  <li><a href="#" title=""><div className="progress-title">Roadmap progress <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></a></li>
                                  <li><a href="#" title=""><div className="progress-title">Images upload <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-green"></div></div></a></li>
                                  <li><a href="#" title=""><div className="progress-title">WordPress migration <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></a></li>
                                  <li><a href="#" title=""><div className="progress-title">Agile development procedures <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-black"><div className="progressbar-overlay"></div></div></div></a></li>
                                  <li><a href="#" title=""><div className="progress-title">Systems integration <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-azure"></div></div></a></li>
                                  <li><a href="#" title=""><div className="progress-title">Code optimizations <b>97%</b></div><div className="progressbar-smaller progressbar" data-value="97"><div className="progressbar-value bg-yellow"></div></div></a></li>
                                </ul>
                              </div>
                              <div className="button-pane button-pane-alt pad5A text-center"><a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div>
                            </div>
                          </div>
                          <div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a></div>
                        </div>
                      </div>
    )
  }
}
export default Topbar;

/*

<div id="page-header">
              <div id="header-nav-left">
              <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
                <i className="glyph-icon icon-linecons-lock"></i>
              </a>
              <div className="user-account-btn dropdown">
                <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                  <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image">
                  <span>Michael Lee</span>
                  <i className="glyph-icon icon-angle-down"></i>
                </a>
                  <div className="dropdown-menu float-right">
                    <div className="box-sm">
                      <div className="login-box clearfix">
                        <div className="user-img">
                        <a href="#" title="" className="change-img">Change photo</a>
                          <img src="../bin/assets/image-resources/gravatar.jpg" alt=""></div>
                          <div className="user-info"><span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a> <a href="#" title="View notifications">View notifications</a></div>
                        </div>
                        <div className="divider"></div>
                        <ul className="reset-ul mrg5B">
                          <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                          <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                          <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                        </ul>
                        <div className="button-pane button-pane-alt pad5L pad5R text-center"><a href="#" className="btn btn-flat display-block font-normal btn-danger"><i className="glyph-icon icon-power-off"></i> Logout</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="header-nav-right"><a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search"><i className="glyph-icon icon-search"></i></a>
                  <div className="hide" id="popover-search">
                    <div className="pad5A box-md">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search terms here ...">
                        <span className="input-group-btn"><a className="btn btn-primary" href="#">Search</a></span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown" id="dashnav-btn"><a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu"><i className="glyph-icon icon-linecons-cog"></i></a>
                    <div className="dropdown-menu float-left">
                      <div className="box-sm">
                        <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                          <a href="#" className="btn vertical-button hover-blue-alt" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard
                          </a>
                          <a href="#" className="btn vertical-button hover-green" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets
                          </a>
                          <a href="#" className="btn vertical-button hover-orange" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables
                          </a>
                          <a href="#" className="btn vertical-button hover-orange" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts
                          </a>
                          <a href="#" className="btn vertical-button hover-purple" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons
                          </a>
                          <a href="#" className="btn vertical-button hover-azure" title="">
                            <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels
                          </a>
                        </div>
                        <div className="divider"></div>
                        <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix"><a href="#" className="btn vertical-button remove-border btn-info" title="">
                          <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a>
                          <a href="#" className="btn vertical-button remove-border btn-danger" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a>
                          <a href="#" className="btn vertical-button remove-border btn-purple" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a>
                          <a href="#" className="btn vertical-button remove-border btn-azure" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a>
                          <a href="#" className="btn vertical-button remove-border btn-yellow" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a>
                          <a href="#" className="btn vertical-button remove-border btn-warning" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                        </div>
                      </div>
                    </div>
                  </div><a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen"><i className="glyph-icon icon-arrows-alt"></i></a> <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar"><i className="glyph-icon icon-linecons-paper-plane"></i></a>
                  <div className="dropdown" id="notifications-btn">
                    <a data-toggle="dropdown" href="#" title="">
                      <span className="small-badge bg-yellow"></span>
                      <i className="glyph-icon icon-linecons-megaphone"></i></a>
                      <div className="dropdown-menu box-md float-left">
                        <div className="popover-title display-block clearfix pad10A">Notifications <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a></div>
                        <div className="scrollable-content scrollable-slim-box">
                          <ul className="no-border notifications-box">
                            <li><span className="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-users"></span> <span className="notification-text font-blue">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-green icon-notification glyph-icon icon-sitemap"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-azure icon-notification glyph-icon icon-random"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-blue icon-notification glyph-icon icon-user"></span> <span className="notification-text font-blue">Alternate notification styling.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-green icon-notification glyph-icon icon-user"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                          </ul>
                        </div>
                        <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                          <a href="#" className="btn btn-flat btn-primary" title="View all notifications">View all notifications</a>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown" id="progress-btn">
                      <a data-toggle="dropdown" href="#" title=""><span className="small-badge bg-azure"></span> <i className="glyph-icon icon-linecons-params"></i></a>
                      <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                        <div className="scrollable-content scrollable-slim-box">
                          <ul className="no-border progress-box progress-box-links">
                            <li><a href="#" title=""><div className="progress-title">Finishing uploading files <b>23%</b></div><div className="progressbar-smaller progressbar" data-value="23"><div className="progressbar-value bg-blue-alt"><div className="progressbar-overlay"></div></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Roadmap progress <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Images upload <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-green"></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">WordPress migration <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Agile development procedures <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-black"><div className="progressbar-overlay"></div></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Systems integration <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-azure"></div></div></a></li>
                            <li><a href="#" title=""><div className="progress-title">Code optimizations <b>97%</b></div><div className="progressbar-smaller progressbar" data-value="97"><div className="progressbar-value bg-yellow"></div></div></a></li>
                          </ul>
                        </div>
                        <div className="button-pane button-pane-alt pad5A text-center"><a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div>
                      </div>
                    </div>
                    <div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a></div>
                  </div>
                </div>
                <script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>
                <div id="page-title">
                  <h2>FAQ Section</h2>
                  <p className="mrg15B">Example FAQ section created using the components available in DelightUI</p>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <ul className="list-group">
                      <li className="mrg10B"><a href="#faq-tab-1" data-toggle="tab" className="list-group-item bg-white">How to get paid <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                      <li className="mrg10B"><a href="#faq-tab-2" data-toggle="tab" className="list-group-item bg-white">ThemeForest related <i className="glyph-icon font-green icon-angle-right mrg0A"></i></a></li>
                      <li className="mrg10B"><a href="#faq-tab-3" data-toggle="tab" className="list-group-item bg-white">Common questions <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                      <li className="mrg10B"><a href="#faq-tab-4" data-toggle="tab" className="list-group-item bg-white">Terms of service <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                    </ul>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content">
                      <div className="tab-pane fade active in pad0A" id="faq-tab-1">
                        <div className="panel-group" id="accordion5">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseOne">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseTwo">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseThree">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade pad0A" id="faq-tab-2">
                        <div className="panel-group" id="accordion1">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne1" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo1" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree1" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade pad0A" id="faq-tab-3">
                        <div className="panel-group" id="accordion2">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne2" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo2">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo2" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseThree2">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree2" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade pad0A" id="faq-tab-4">
                        <div className="panel-group" id="accordion3">
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne4">Collapsible Group Item #1</a></h4>
                            </div>
                            <div id="collapseOne4" className="panel-collapse collapse in">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo4">Collapsible Group Item #2</a></h4>
                            </div>
                            <div id="collapseTwo4" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="panel-heading">
                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree4">Collapsible Group Item #3</a></h4>
                            </div>
                            <div id="collapseThree4" className="panel-collapse collapse">
                              <div className="panel-body pad0B">
                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>































                <div id="page-header">
                  <div id="header-nav-left">
                    <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
                      <i className="glyph-icon icon-linecons-lock"></i>
                    </a>
                    <div className="user-account-btn dropdown">
                      <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                        <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image">
                        <span>Michael Lee</span>
                        <i className="glyph-icon icon-angle-down"></i>
                      </a>
                      <div className="dropdown-menu float-right">
                        <div className="box-sm">
                          <div className="login-box clearfix">
                            <div className="user-img">
                              <a href="#" title="" className="change-img">Change photo</a>
                              <img src="../bin/assets/image-resources/gravatar.jpg" alt="">
                            </div>
                            <div className="user-info">
                              <span>Michael Lee <i>UX/UI developer</i></span>
                              <a href="#" title="Edit profile">Edit profile</a>
                              <a href="#" title="View notifications">View notifications</a>
                            </div>
                          </div>
                          <div className="divider"></div>
                          <ul className="reset-ul mrg5B">
                            <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                            <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                            <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                          </ul>
                          <div className="button-pane button-pane-alt pad5L pad5R text-center">
                            <a href="#" className="btn btn-flat display-block font-normal btn-danger">
                              <i className="glyph-icon icon-power-off"></i> Logout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="header-nav-right">
                    <a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search">
                      <i className="glyph-icon icon-search"></i>
                    </a>
                    <div className="hide" id="popover-search">
                      <div className="pad5A box-md">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search terms here ...">
                          <span className="input-group-btn">
                            <a className="btn btn-primary" href="#">Search</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown" id="dashnav-btn">
                      <a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu">
                        <i className="glyph-icon icon-linecons-cog"></i>
                      </a>
                      <div className="dropdown-menu float-left">
                        <div className="box-sm">
                          <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                            <a href="#" className="btn vertical-button hover-blue-alt" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard
                            </a>
                            <a href="#" className="btn vertical-button hover-green" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets
                            </a>
                            <a href="#" className="btn vertical-button hover-orange" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables
                            </a>
                            <a href="#" className="btn vertical-button hover-orange" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts
                            </a>
                            <a href="#" className="btn vertical-button hover-purple" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons
                            </a>
                            <a href="#" className="btn vertical-button hover-azure" title="">
                              <span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels
                            </a>
                          </div>
                          <div className="divider"></div>
                          <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                            <a href="#" className="btn vertical-button remove-border btn-info" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a>
                            <a href="#" className="btn vertical-button remove-border btn-danger" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a>
                            <a href="#" className="btn vertical-button remove-border btn-purple" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a>
                            <a href="#" className="btn vertical-button remove-border btn-azure" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a>
                            <a href="#" className="btn vertical-button remove-border btn-yellow" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a>
                            <a href="#" className="btn vertical-button remove-border btn-warning" title=""><span className="glyph-icon icon-separator-vertical pad0A medium"><i className="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen">
                      <i className="glyph-icon icon-arrows-alt"></i>
                    </a>
                    <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar">
                      <i className="glyph-icon icon-linecons-paper-plane"></i>
                    </a>
                    <div className="dropdown" id="notifications-btn">
                      <a data-toggle="dropdown" href="#" title="">
                        <span className="small-badge bg-yellow"></span>
                        <i className="glyph-icon icon-linecons-megaphone"></i>
                      </a>
                      <div className="dropdown-menu box-md float-left">
                        <div className="popover-title display-block clearfix pad10A">Notifications <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a></div>
                          <div className="scrollable-content scrollable-slim-box">
                                          <ul className="no-border notifications-box">
                                            <li><span className="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-users"></span> <span className="notification-text font-blue">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-green icon-notification glyph-icon icon-sitemap"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-azure icon-notification glyph-icon icon-random"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-blue icon-notification glyph-icon icon-user"></span> <span className="notification-text font-blue">Alternate notification styling.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-green icon-notification glyph-icon icon-user"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-purple icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                            <li><span className="bg-warning icon-notification glyph-icon icon-user"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div></li>
                                          </ul>
                                        </div>
                                        <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                                          <a href="#" className="btn btn-flat btn-primary" title="View all notifications">View all notifications</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="dropdown" id="progress-btn">
                                      <a data-toggle="dropdown" href="#" title=""><span className="small-badge bg-azure"></span> <i className="glyph-icon icon-linecons-params"></i></a>
                                      <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                                        <div className="scrollable-content scrollable-slim-box">
                                          <ul className="no-border progress-box progress-box-links">
                                            <li><a href="#" title=""><div className="progress-title">Finishing uploading files <b>23%</b></div><div className="progressbar-smaller progressbar" data-value="23"><div className="progressbar-value bg-blue-alt"><div className="progressbar-overlay"></div></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Roadmap progress <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Images upload <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-green"></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">WordPress migration <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Agile development procedures <b>91%</b></div><div className="progressbar-smaller progressbar" data-value="91"><div className="progressbar-value bg-black"><div className="progressbar-overlay"></div></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Systems integration <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-azure"></div></div></a></li>
                                            <li><a href="#" title=""><div className="progress-title">Code optimizations <b>97%</b></div><div className="progressbar-smaller progressbar" data-value="97"><div className="progressbar-value bg-yellow"></div></div></a></li>
                                          </ul>
                                        </div>
                                        <div className="button-pane button-pane-alt pad5A text-center"><a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div>
                                      </div>
                                    </div>
                                    <div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a></div>
                                  </div>
                                </div>
                                <script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>
                                <div id="page-title">
                                  <h2>FAQ Section</h2>
                                  <p className="mrg15B">Example FAQ section created using the components available in DelightUI</p>
                                </div>
                                <div className="row">
                                  <div className="col-md-3">
                                    <ul className="list-group">
                                      <li className="mrg10B"><a href="#faq-tab-1" data-toggle="tab" className="list-group-item bg-white">How to get paid <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                                      <li className="mrg10B"><a href="#faq-tab-2" data-toggle="tab" className="list-group-item bg-white">ThemeForest related <i className="glyph-icon font-green icon-angle-right mrg0A"></i></a></li>
                                      <li className="mrg10B"><a href="#faq-tab-3" data-toggle="tab" className="list-group-item bg-white">Common questions <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                                      <li className="mrg10B"><a href="#faq-tab-4" data-toggle="tab" className="list-group-item bg-white">Terms of service <i className="glyph-icon icon-angle-right mrg0A"></i></a></li>
                                    </ul>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="tab-content">
                                      <div className="tab-pane fade active in pad0A" id="faq-tab-1">
                                        <div className="panel-group" id="accordion5">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseOne">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseTwo">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion5" href="#collapseThree">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade pad0A" id="faq-tab-2">
                                        <div className="panel-group" id="accordion1">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne1" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo1" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree1" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                                <p className="mrg15B">For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                <p className="mrg15B">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade pad0A" id="faq-tab-3">
                                        <div className="panel-group" id="accordion2">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne2" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                                                <p className="mrg15B">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo2">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo2" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion2" href="#collapseThree2">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree2" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade pad0A" id="faq-tab-4">
                                        <div className="panel-group" id="accordion3">
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne4">Collapsible Group Item #1</a></h4>
                                            </div>
                                            <div id="collapseOne4" className="panel-collapse collapse in">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo4">Collapsible Group Item #2</a></h4>
                                            </div>
                                            <div id="collapseTwo4" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="panel">
                                            <div className="panel-heading">
                                              <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree4">Collapsible Group Item #3</a></h4>
                                            </div>
                                            <div id="collapseThree4" className="panel-collapse collapse">
                                              <div className="panel-body pad0B">
                                                <p className="mrg15B">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                                <p className="mrg15B">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
*/

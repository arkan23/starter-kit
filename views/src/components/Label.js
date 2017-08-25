import React, { Component } from 'react';
import  {Link}  from 'react-router';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
import SBleft from './SBleft';
import SBright from './SBright';
import Navigate from './Navbar';
import Topbar from './Topbar';
import Infobar from './Infobar';
import Lablengine from './label/Lablengine';

class Label extends Component{

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
            <Lablengine/>

                </div>
              </div>
         </div>
</div>

    )
  }
}
export default Label;

/*

<div>

<div className="sb-slidebar bg-black sb-left sb-style-overlay">
    <div className="scrollable-content scrollable-slim-sidebar">
      <div className="pad10A">
        <div className="divider-header">Online</div>
        <ul className="chat-box">
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial1.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Grace Padilla</b><p>On the other hand, we denounce...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial2.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Carl Gamble</b><p>Dislike men who are so beguiled...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial3.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Michael Poole</b><p>Of pleasure of the moment, so...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial4.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Bill Green</b><p>That they cannot foresee the...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial5.jpg" alt=""/>
              <div className="small-badge bg-green"></div>
            </div><b>Cheryl Soucy</b><p>Pain and trouble that are bound...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
        </ul>
        <div className="divider-header">Idle</div>
        <ul className="chat-box">
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial6.jpg" alt=""/>
              <div className="small-badge bg-orange"></div>
            </div><b>Jose Kramer</b><p>Equal blame belongs to those...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial7.jpg" alt=""/>
              <div className="small-badge bg-orange"></div>
            </div><b>Dan Garcia</b><p>Weakness of will, which is same...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial8.jpg" alt=""/>
              <div className="small-badge bg-orange"></div>
            </div><b>Edward Bridges</b><p>These cases are perfectly simple...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
        </ul>
        <div className="divider-header">Offline</div>
        <ul className="chat-box">
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial1.jpg" alt=""/>
              <div className="small-badge bg-red"></div>
            </div><b>Randy Herod</b><p>In a free hour, when our power...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
          <li>
            <div className="status-badge">
              <img className="img-circle" width="40" src="../bin/assets/image-resources/people/testimonial2.jpg" alt=""/>
              <div className="small-badge bg-red"></div>
            </div><b>Patricia Bagley</b><p>when nothing prevents our being...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="sb-slidebar bg-black sb-right sb-style-overlay">
    <div className="scrollable-content scrollable-slim-sidebar">
      <div className="pad15A">
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-1" className="popover-title">Cloud status <span className="caret"></span></a>
        <div id="sidebar-toggle-1" className="collapse in">
          <div className="pad15A">
            <div className="row">
              <div className="col-md-4">
                <div className="text-center font-gray pad5B text-transform-upr font-size-12">New visits</div>
                <div className="chart-alt-3 font-gray-dark" data-percent="55"><span>55</span>%</div>
              </div>
              <div className="col-md-4">
                <div className="text-center font-gray pad5B text-transform-upr font-size-12">Bounce rate</div>
                <div className="chart-alt-3 font-gray-dark" data-percent="46"><span>46</span>%</div>
              </div>
              <div className="col-md-4">
                <div className="text-center font-gray pad5B text-transform-upr font-size-12">Server load</div>
                <div className="chart-alt-3 font-gray-dark" data-percent="92"><span>92</span>%</div>
              </div>
            </div>
            <div className="divider mrg15T mrg15B"></div>
            <div className="text-center"><a href="#" className="btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart"><i className="glyph-icon icon-refresh"></i> Update charts</a></div>
          </div>
        </div>
        <div className="clear"></div>
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-6" className="popover-title">Latest transfers <span className="caret"></span></a>
        <div id="sidebar-toggle-6" className="collapse in">
          <ul className="files-box">
            <li><i className="files-icon glyph-icon font-red icon-file-archive-o"></i><div className="files-content"><b>blog_export.zip</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added on <b>22.10.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
            <li className="divider"></li>
            <li><i className="files-icon glyph-icon icon-file-code-o"></i><div className="files-content"><b>homepage-test.html</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added <b>19.10.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
            <li className="divider"></li>
            <li><i className="files-icon glyph-icon font-yellow icon-file-image-o"></i><div className="files-content"><b>monthlyReport.jpg</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added on <b>10.9.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
            <li className="divider"></li>
            <li><i className="files-icon glyph-icon font-green icon-file-word-o"></i><div className="files-content"><b>new_presentation.doc</b><div className="files-date"><i className="glyph-icon icon-clock-o"></i> added on <b>5.9.2014</b></div></div><div className="files-buttons"><a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download"><i className="glyph-icon icon-cloud-download"></i></a> <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete"><i className="glyph-icon icon-times"></i></a></div></li>
          </ul>
        </div>
        <div className="clear"></div>
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-3" className="popover-title">Tasks for today <span className="caret"></span></a>
        <div id="sidebar-toggle-3" className="collapse in">
          <ul className="progress-box">
            <li>
              <div className="progress-title">New features development <b>87%</b></div>
              <div className="progressbar-smaller progressbar" data-value="87">
                <div className="progressbar-value bg-azure">
                  <div className="progressbar-overlay"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="progress-title">Finishing uploading files <b>66%</b></div>
              <div className="progressbar-smaller progressbar" data-value="66">
                <div className="progressbar-value bg-red">
                  <div className="progressbar-overlay"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="progress-title">Creating tutorials <b>58%</b></div>
              <div className="progressbar-smaller progressbar" data-value="58">
                <div className="progressbar-value bg-blue-alt"></div>
              </div>
            </li>
            <li>
              <div className="progress-title">Frontend bonus theme <b>74%</b></div>
              <div className="progressbar-smaller progressbar" data-value="74">
                <div className="progressbar-value bg-purple"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
        <a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-4" className="popover-title">Pending notifications <span className="bs-label bg-orange tooltip-button" title="Label example">New</span> <span className="caret"></span></a>
        <div id="sidebar-toggle-4" className="collapse in">
          <ul className="notifications-box notifications-box-alt">
            <li><span className="bg-purple icon-notification glyph-icon icon-users"></span> <span className="notification-text">This is an error notification</span><div className="notification-time">a few seconds ago <span className="glyph-icon icon-clock-o"></span></div><a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details"><i className="glyph-icon icon-arrow-right"></i></a></li>
            <li><span className="bg-warning icon-notification glyph-icon icon-ticket"></span> <span className="notification-text">This is a warning notification</span><div className="notification-time"><b>15</b> minutes ago <span className="glyph-icon icon-clock-o"></span></div><a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details"><i className="glyph-icon icon-arrow-right"></i></a></li>
            <li><span className="bg-green icon-notification glyph-icon icon-random"></span> <span className="notification-text font-green">A success message example.</span><div className="notification-time"><b>2 hours</b> ago <span className="glyph-icon icon-clock-o"></span></div><a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details"><i className="glyph-icon icon-arrow-right"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
          <div id="page-header">
            <div id="header-nav-left"><a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example"><i className="glyph-icon icon-linecons-lock"></i></a>
              <div className="user-account-btn dropdown"><a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                <img width="28" src="../bin/assets/image-resources/gravatar.jpg" alt="Profile image"/> <span>Michael Lee</span> <i className="glyph-icon icon-angle-down"></i></a>
                <div className="dropdown-menu float-right">
                  <div className="box-sm">
                    <div className="login-box clearfix">
                      <div className="user-img"><a href="#" title="" className="change-img">Change photo</a>
                        <img src="../bin/assets/image-resources/gravatar.jpg" alt=""/></div>
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
                      <input type="text" className="form-control" placeholder="Search terms here ..."/>
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
            </div>
          </div>
     </div>
</div>
*/

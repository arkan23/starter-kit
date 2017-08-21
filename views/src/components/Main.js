import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import Mainbar from '../components/Mainbar';

class Main extends Component{

  render(){
    return(
      <div>
        <div className="sb-slidebar bg-black sb-left sb-style-overlay">
            <div className="scrollable-content scrollable-slim-sidebar">
                <div className="pad10A">
                  <div className="divider-header">Online</div>
                  <ul className="chat-box">
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial1.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Grace Padilla</b><p>On the other hand, we denounce...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial2.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Carl Gamble</b><p>Dislike men who are so beguiled...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial3.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Michael Poole</b><p>Of pleasure of the moment, so...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial4.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Bill Green</b><p>That they cannot foresee the...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial5.jpg" alt=""/><div className="small-badge bg-green"></div></div><b>Cheryl Soucy</b><p>Pain and trouble that are bound...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                  </ul>
                  <div className="divider-header">Idle</div>
                  <ul className="chat-box">
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial6.jpg" alt=""/><div className="small-badge bg-orange"></div></div><b>Jose Kramer</b><p>Equal blame belongs to those...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial7.jpg" alt=""/><div className="small-badge bg-orange"></div></div><b>Dan Garcia</b><p>Weakness of will, which is same...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial8.jpg" alt=""/><div className="small-badge bg-orange"></div></div><b>Edward Bridges</b><p>These cases are perfectly simple...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                  </ul>
                  <div className="divider-header">Offline</div>
                  <ul className="chat-box">
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial1.jpg" alt=""/><div className="small-badge bg-red"></div></div><b>Randy Herod</b><p>In a free hour, when our power...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
                    <li><div className="status-badge"><img className="img-circle" width="40" src="../public/assets/image-resources/people/testimonial2.jpg" alt=""/><div className="small-badge bg-red"></div></div><b>Patricia Bagley</b><p>when nothing prevents our being...</p><a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o"></i></a></li>
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
                    <div className="text-center">
                      <a href="#" className="btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart"><i className="glyph-icon icon-refresh"></i> Update charts</a></div></div></div><div className="clear"></div><a href="#" title="" data-toggle="collapse" data-target="#sidebar-toggle-6" className="popover-title">Latest transfers <span className="caret"></span></a>
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
                          <li><div className="progress-title">New features development <b>87%</b></div><div className="progressbar-smaller progressbar" data-value="87"><div className="progressbar-value bg-azure"><div className="progressbar-overlay"></div></div></div></li>
                          <li><div className="progress-title">Finishing uploading files <b>66%</b></div><div className="progressbar-smaller progressbar" data-value="66"><div className="progressbar-value bg-red"><div className="progressbar-overlay"></div></div></div></li>
                          <li><div className="progress-title">Creating tutorials <b>58%</b></div><div className="progressbar-smaller progressbar" data-value="58"><div className="progressbar-value bg-blue-alt"></div></div></li>
                          <li><div className="progress-title">Frontend bonus theme <b>74%</b></div><div className="progressbar-smaller progressbar" data-value="74"><div className="progressbar-value bg-purple"></div></div></li>
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
                    <img src="../public/assets/images/svg-loaders/bars.svg" width="40" alt=""/>
                  </div>
                </div>
                <div id="page-wrapper">
                  <div id="mobile-navigation">
                    <button id="nav-toggle" className="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
                  </div>
                  <div id="page-sidebar">
                    <div id="header-logo" className="logo-bg">
                      <a href="index.html" className="logo-content-big" title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard Template</span></a>
                       <a href="index.html" className="logo-content-small" title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard Template</span></a>
                      <a id="close-sidebar" href="#" title="Close sidebar"><i className="glyph-icon icon-outdent"></i></a>
                    </div>
                    <div className="scroll-sidebar">
                      <ul id="sidebar-menu">
                        <li className="header"><span>Overview</span></li>
                        <li><a href="index.html" title="Admin Dashboard"><i className="glyph-icon icon-linecons-tv"></i> <span>Admin dashboard</span></a></li>
                        <li className="header"><span>Components</span></li>
                        <li><a href="javascript:void(0);" title="Elements"><i className="glyph-icon icon-linecons-diamond"></i> <span>Elements</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="buttons.html" title="Buttons"><span>Buttons</span></a></li>
                              <li><a href="labels-badges.html" title="Labels &amp; Badges"><span>Labels &amp; Badges</span></a></li>
                              <li><a href="content-boxes.html" title="Content boxes"><span>Content boxes</span></a></li>
                              <li><a href="icons.html" title="Icons"><span>Icons</span></a></li>
                              <li><a href="nav-menus.html" title="Navigation menus"><span>Navigation menus</span></a></li>
                              <li><a href="response-messages.html" title="Response messages"><span>Response messages</span></a></li>
                              <li><a href="images.html" title="Images"><span>Images</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Dashboard boxes"><i className="glyph-icon icon-linecons-lightbulb"></i> <span>Dashboard boxes</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="chart-boxes.html" title="Chart boxes"><span>Chart boxes</span></a></li>
                              <li><a href="tile-boxes.html" title="Tile boxes"><span>Tile boxes</span></a></li>
                              <li><a href="social-boxes.html" title="Social boxes"><span>Social boxes</span></a></li>
                              <li><a href="panel-boxes.html" title="Panel boxes"><span>Panel boxes</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Widgets"><i className="glyph-icon icon-linecons-wallet"></i> <span>Widgets</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="tabs.html" title="Responsive tabs"><span>Responsive tabs</span></a></li>
                              <li><a href="collapsable.html" title="Collapsables"><span>Collapsable accordions</span></a></li>
                              <li><a href="bs-carousel.html" title="Bootstrap Carousel"><span>Bootstrap carousel</span></a></li>
                              <li><a href="calendar.html" title="Calendar"><span>Calendar</span></a></li>
                              <li><a href="scrollbars.html" title="Custom scrollbars"><span>Custom scrollbars</span></a></li>
                              <li><a href="modals.html" title="Modals"><span>Modals</span></a></li>
                              <li><a href="notifications.html" title="Notifications"><span>Notifications</span></a></li>
                              <li><a href="lazyload.html" title="Lazyload"><span>Lazyload</span></a></li>
                              <li><a href="loading-feedback.html" title="Loading feedback"><span>Loading feedback</span></a></li>
                              <li><a href="popovers-tooltips.html" title="Popovers &amp; Tooltips"><span>Popovers & Tooltips</span></a></li>
                              <li><a href="progress-bars.html" title="Progress bars"><span>Progress bars</span></a></li>
                              <li><a href="sortable-elements.html" title="Sortable elements"><span>Sortable elements</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Forms UI"><i className="glyph-icon icon-linecons-eye"></i> <span>Forms UI</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="forms-elements.html" title="Form elements"><span>Form elements</span></a></li>
                              <li><a href="forms-validation.html" title="Form validation"><span>Form validation</span></a></li>
                              <li><a href="pickers.html" title="Pickers"><span>Pickers</span></a></li>
                              <li><a href="sliders.html" title="Sliders"><span>Sliders</span></a></li>
                              <li><a href="forms-wizard.html" title="Form wizards"><span>Form wizards</span></a></li>
                              <li><a href="forms-masks.html" title="Form input masks"><span>Form input masks</span></a></li>
                              <li><a href="image-crop.html" title="Image crop"><span>Image crop</span></a></li>
                              <li><a href="dropzone-uploader.html" title="Dropzone uploader"><span>Dropzone uploader</span></a></li>
                              <li><a href="multi-uploader.html" title="Multi uploader"><span>Multi uploader</span></a></li>
                              <li><a href="input-knobs.html" title="Input knobs"><span>Input knobs</span></a></li>
                              <li><a href="ckeditor.html" title="Ckeditor"><span>Ckeditor</span></a></li>
                              <li><a href="summernote.html" title="Summernote"><span>Summernote</span></a></li>
                              <li><a href="markdown.html" title="Markdown editor"><span>Markdown editor</span></a></li>
                              <li><a href="inline-editor.html" title="Inline editor"><span>Inline editor</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Advanced tables"><i className="glyph-icon icon-linecons-megaphone"></i> <span>Advanced tables</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="tables.html" title="Basic tables"><span>Basic tables</span></a></li>
                              <li><a href="responsive-tables.html" title="Responsive tables"><span>Responsive tables</span></a></li>
                              <li><a href="data-tables.html" title="Data tables"><span>Data tables</span></a></li>
                              <li><a href="advanced-datatables.html" title="Advanced data tables"><span>Advanced data tables</span></a></li>
                              <li><a href="fixed-datatables.html" title="Fixed data tables"><span>Fixed data tables</span></a></li>
                              <li><a href="responsive-datatables.html" title="Responsive data tables"><span>Responsive data tables</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Charts"><i className="glyph-icon icon-linecons-paper-plane"></i> <span>Charts</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="flot-charts.html" title="Flot charts"><span>Flot charts</span></a></li>
                              <li><a href="sparklines.html" title="Sparklines"><span>Sparklines</span></a></li>
                              <li><a href="pie-gages.html" title="PieGages"><span>PieGages</span></a></li>
                              <li><a href="just-gage.html" title="justGage"><span>justGage</span></a></li>
                              <li><a href="morris-charts.html" title="Morris charts"><span>Morris charts</span></a></li>
                              <li><a href="xcharts.html" title="xCharts"><span>xCharts</span></a></li>
                              <li><a href="chart-js.html" title="Chart.js"><span>Chart.js</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Maps"><i className="glyph-icon icon-linecons-sound"></i> <span>Maps</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="gmaps.html" title="gMaps"><span>gMaps</span></a></li>
                              <li><a href="vector-maps.html" title="Vector maps"><span>Vector maps</span></a></li>
                              <li><a href="mapael.html" title="Mapael"><span>Mapael</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="header"><span>Extra</span></li>
                        <li><a href="javascript:void(0);" title="Pages"><i className="glyph-icon icon-linecons-fire"></i> <span>Pages</span> <span className="bs-label badge-yellow">NEW</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="index-alt.html" title="Alternate dashboard"><span>Alternate dashboard</span></a></li>
                              <li><a href="view-profile.html" title="View profile"><span>View profile</span></a></li>
                              <li><a href="faq-section.html" title="FAQ section"><span>FAQ section</span></a></li>
                              <li><a href="auto-menu.html" title="Auto menu"><span>Auto menu</span></a></li>
                              <li><a href="invoice.html" title="Invoice"><span>Invoice</span></a></li>
                              <li><a href="admin-blog.html" title="Blog posts list"><span>Blog posts list</span></a></li>
                              <li><a href="admin-pricing.html" title="Pricing tables"><span>Pricing tables</span></a></li>
                              <li><a href="portfolio-gallery.html" title="Portfolio gallery"><span>Portfolio gallery</span></a></li>
                              <li><a href="portfolio-masonry.html" title="Portfolio masonry"><span>Portfolio masonry</span></a></li>
                              <li><a href="slidebars.html" title="Slidebars"><span>Slidebars</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Other Pages"><i className="glyph-icon icon-linecons-cup"></i> <span>Other Pages</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="login-1.html" target="_blank" title="Login page 1"><span>Login page 1</span></a></li>
                              <li><a href="login-2.html" target="_blank" title="Login page 2"><span>Login page 2</span></a></li>
                              <li><a href="login-3.html" target="_blank" title="Login page 3"><span>Login page 3</span></a></li>
                              <li><a href="login-4.html" target="_blank" title="Login page 4"><span>Login page 4</span></a></li>
                              <li><a href="login-5.html" target="_blank" title="Login page 5"><span>Login page 5</span></a></li>
                              <li><a href="lockscreen-1.html" target="_blank" title="Lockscreen page 1"><span>Lockscreen page 1</span></a></li>
                              <li><a href="lockscreen-2.html" target="_blank" title="Lockscreen page 2"><span>Lockscreen page 2</span></a></li>
                              <li><a href="lockscreen-3.html" target="_blank" title="Lockscreen page 3"><span>Lockscreen page 3</span></a></li>
                              <li><a href="server-1.html" target="_blank" title="Server page 1"><span>Error 404 page</span></a></li>
                              <li><a href="server-2.html" target="_blank" title="Server page 2"><span>Error 404 alternate</span></a></li>
                              <li><a href="server-3.html" target="_blank" title="Server page 3"><span>Server 500 error</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Mailbox"><i className="glyph-icon icon-linecons-mail"></i> <span>Mailbox</span> <span className="bs-badge badge-danger">3</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="mailbox-inbox.html" title="Inbox"><span>Inbox</span></a></li>
                              <li><a href="mailbox-compose.html" title="Compose message"><span>Compose message</span></a></li>
                              <li><a href="mailbox-single.html" title="Single message"><span>Single message</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Snippets"><i className="glyph-icon icon-linecons-cd"></i> <span>Snippets</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="timeline.html" title="Timeline"><span>Timeline</span></a></li>
                              <li><a href="chat.html" title="Chat"><span>Chat</span></a></li>
                              <li><a href="checklist.html" title="Checklist"><span>Checklist</span></a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="javascript:void(0);" title="Helpers"><i className="glyph-icon icon-linecons-doc"></i> <span>Helpers</span></a>
                          <div className="sidebar-submenu">
                            <ul>
                              <li><a href="helper-classes.html" title="Helper classes"><span>Helper classes</span></a></li>
                              <li><a href="page-transitions.html" title="Page transitions"><span>Page transitions</span></a></li>
                              <li><a href="animations.html" title="Animations"><span>Animations</span></a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="page-content-wrapper">
                    <div id="page-content">
                      <div id="page-header">
                        <div id="header-nav-left">
                          <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example"><i className="glyph-icon icon-linecons-lock"></i></a>
                          <div className="user-account-btn dropdown">
                            <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                              <img width="28" src="../public/assets/image-resources/gravatar.jpg" alt="Profile image"/> <span>Michael Lee</span> <i className="glyph-icon icon-angle-down"></i></a><div className="dropdown-menu float-right"><div className="box-sm"><div className="login-box clearfix">
                                <div className="user-img"><a href="#" title="" className="change-img">Change photo</a>
                                  <img src="../public/assets/image-resources/gravatar.jpg" alt=""/>
                                </div>
                                <div className="user-info"><span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a> <a href="#" title="View notifications">View notifications</a></div>
                              </div>
                              <div className="divider"></div>
                              <ul className="reset-ul mrg5B">
                                <li><a href="#">View login page example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                                <li><a href="#">View lockscreen example <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                                <li><a href="#">View account details <i className="glyph-icon float-right icon-caret-right"></i></a></li>
                              </ul>
                              <div className="button-pane button-pane-alt pad5L pad5R text-center">
                                <a href="#" className="btn btn-flat display-block font-normal btn-danger"><i className="glyph-icon icon-power-off"></i> Logout</a></div></div></div></div></div><div id="header-nav-right"><a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search"><i className="glyph-icon icon-search"></i></a>
                                  <div className="hide" id="popover-search">
                                    <div className="pad5A box-md">
                                      <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search terms here ..."/> <span className="input-group-btn"><a className="btn btn-primary" href="#">Search</a></span></div></div></div><div className="dropdown" id="dashnav-btn"><a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu"><i className="glyph-icon icon-linecons-cog"></i></a>
                                          <div className="dropdown-menu float-left">
                                            <div className="box-sm">
                                              <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                                <a href="#" className="btn vertical-button hover-blue-alt" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i>
                                                  </span> Dashboard
                                                </a>
                                                <a href="#" className="btn vertical-button hover-green" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-tags opacity-80 font-size-20"></i>
                                                  </span> Widgets
                                                </a>
                                                <a href="#" className="btn vertical-button hover-orange" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-fire opacity-80 font-size-20"></i>
                                                  </span> Tables
                                                </a>
                                                <a href="#" className="btn vertical-button hover-orange" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i>
                                                  </span> Charts
                                                </a>
                                                <a href="#" className="btn vertical-button hover-purple" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-laptop opacity-80 font-size-20"></i>
                                                  </span> Buttons
                                                </a>
                                                <a href="#" className="btn vertical-button hover-azure" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-code opacity-80 font-size-20"></i>
                                                  </span> Panels
                                                </a>
                                              </div>
                                              <div className="divider"></div>
                                              <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                                <a href="#" className="btn vertical-button remove-border btn-info" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-dashboard opacity-80 font-size-20"></i>
                                                  </span> Dashboard
                                                </a>
                                                <a href="#" className="btn vertical-button remove-border btn-danger" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-tags opacity-80 font-size-20"></i>
                                                  </span> Widgets
                                                </a>
                                                <a href="#" className="btn vertical-button remove-border btn-purple" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-fire opacity-80 font-size-20"></i>
                                                  </span> Tables
                                                </a>
                                                <a href="#" className="btn vertical-button remove-border btn-azure" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i>
                                                  </span> Charts
                                                </a>
                                                <a href="#" className="btn vertical-button remove-border btn-yellow" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-laptop opacity-80 font-size-20"></i>
                                                  </span> Buttons
                                                </a>
                                                <a href="#" className="btn vertical-button remove-border btn-warning" title="">
                                                  <span className="glyph-icon icon-separator-vertical pad0A medium">
                                                    <i className="glyph-icon icon-code opacity-80 font-size-20"></i>
                                                  </span> Panels
                                                </a>
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
                                            <div className="popover-title display-block clearfix pad10A">Notifications
                                              <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a>
                                            </div>
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
                                            <div className="button-pane button-pane-alt pad5A text-center">
                                              <a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">View all notifications</a></div></div></div><div className="dropdown" id="cloud-btn"><a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar"><i className="glyph-icon icon-linecons-cloud"></i></a>
                                              </div></div>



                                              <div id="page-title"><h2>Dashboard</h2><p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p></div>
  <div className="row"><div className="col-md-8">
    <div className="row">
      <div className="col-md-3">
        <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-danger">
          <span className="bs-badge badge-absolute">1</span>
            <div className="tile-header">Reach</div>
            <div className="tile-content-wrapper">
              <i className="glyph-icon icon-file-photo-o"></i>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-success">
            <div className="tile-header">Comments</div>
            <div className="tile-content-wrapper">
              <i className="glyph-icon icon-desktop"></i>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-info">
            <span className="bs-badge badge-absolute">2</span>
            <div className="tile-header">Reviews</div>
            <div className="tile-content-wrapper">
              <i className="glyph-icon icon-download"></i>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-warning">
            <div className="tile-header">Visitors</div>
            <div className="tile-content-wrapper">
              <i className="glyph-icon icon-code-fork"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="panel mrg20T">
        <div className="panel-body">
          <h3 className="title-hero">Weekly Sales</h3>
          <div className="example-box-wrapper">
            <div id="data-example-1" className="mrg20B" style={{width: '100%', height: '300px'}}></div>
          </div>
        </div>
      </div>
      <div className="panel-layout">
        <div className="panel-box col-xs-6">
          <div className="panel-content bg-white">
            <canvas id="icon-cloud" width="80" height="80"></canvas>
          </div><div className="panel-content bg-black">
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
      <div className="panel">
          <div className="panel-body">
            <h3 className="title-hero">Basic</h3>
            <div className="example-box-wrapper">
              <table cellpadding="0" cellspacing="0" border="0" className="table table-striped table-bordered" id="datatable-example">
                <thead>
                  <tr><th>Browser</th><th>Platform(s)</th><th>Engine version</th></tr>
                </thead>
                <tbody>
                  <tr className="odd gradeX"><td>Internet Explorer 4.0</td><td>Win 95+</td><td className="center">4</td></tr>
                  <tr className="even gradeC"><td>Internet Explorer 5.0</td><td>Win 95+</td><td className="center">5</td></tr>
                  <tr className="odd gradeA"><td>Internet Explorer 5.5</td><td>Win 95+</td><td className="center">5.5</td></tr>
                  <tr className="even gradeA"><td>Internet Explorer 6</td><td>Win 98+</td><td className="center">6</td></tr>
                  <tr className="odd gradeA"><td>Internet Explorer 7</td><td>Win XP SP2+</td><td className="center">7</td></tr>
                  <tr className="even gradeA"><td>AOL browser (AOL desktop)</td><td>Win XP</td><td className="center">6</td></tr>
                  <tr className="gradeA"><td>Firefox 1.0</td><td>Win 98+ / OSX.2+</td><td className="center">1.7</td></tr>
                  <tr className="gradeA"><td>Firefox 1.5</td><td>Win 98+ / OSX.2+</td><td className="center">1.8</td></tr>
                  <tr className="gradeA"><td>Firefox 2.0</td><td>Win 98+ / OSX.2+</td><td className="center">1.8</td></tr>
                  <tr className="gradeA"><td>Firefox 3.0</td><td>Win 2k+ / OSX.3+</td><td className="center">1.9</td></tr>
                  <tr className="gradeA"><td>Camino 1.0</td><td>OSX.2+</td><td className="center">1.8</td></tr>
                  <tr className="gradeA"><td>Camino 1.5</td><td>OSX.3+</td><td className="center">1.8</td></tr>
                  <tr className="gradeU"><td>All others</td><td>-</td><td className="center">-</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-body">
            <h3 className="title-hero">Alternate carousel</h3>
            <div className="example-box-wrapper">
              <div className="owl-carousel-4 slider-wrapper inverse arrows-outside carousel-wrapper">
                <div>
                  <div className="thumbnail-box-wrapper mrg5A">
                    <div className="thumbnail-box">
                      <a className="thumb-link" href="#" title=""></a>
                      <div className="thumb-content">
                        <div className="center-vertical">
                          <div className="center-content">
                            <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                          </div>
                        </div>
                      </div>
                      <div className="thumb-overlay bg-black"></div>
                      <img src="../public/assets/image-resources/stock-images/img-17.jpg" alt=""/>
                    </div>
                      <div className="thumb-pane">
                        <h3 className="thumb-heading animated rollIn">
                          <a href="#" title="">Working in the morning</a>
                          <small>12 March 2015</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="thumbnail-box-wrapper mrg5A">
                      <div className="thumbnail-box">
                        <a className="thumb-link" href="#" title=""></a>
                        <div className="thumb-content">
                          <div className="center-vertical">
                            <div className="center-content">
                              <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                            </div>
                          </div>
                        </div>
                        <div className="thumb-overlay bg-black"></div>
                        <img src="../public/assets/image-resources/stock-images/img-18.jpg" alt=""/>
                      </div>
                      <div className="thumb-pane">
                        <h3 className="thumb-heading animated rollIn">
                          <a href="#" title="">Working in the morning</a>
                          <small>12 March 2015</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="thumbnail-box-wrapper mrg5A">
                      <div className="thumbnail-box">
                        <a className="thumb-link" href="#" title=""></a>
                        <div className="thumb-content">
                          <div className="center-vertical">
                            <div className="center-content">
                              <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                            </div>
                          </div>
                        </div>
                        <div className="thumb-overlay bg-black"></div>
                        <img src="../public/assets/image-resources/stock-images/img-19.jpg" alt=""/>
                      </div>
                      <div className="thumb-pane">
                        <h3 className="thumb-heading animated rollIn">
                          <a href="#" title="">Working in the morning</a>
                                <small>12 March 2015</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="thumbnail-box-wrapper mrg5A">
                      <div className="thumbnail-box">
                        <a className="thumb-link" href="#" title=""></a>
                        <div className="thumb-content">
                          <div className="center-vertical">
                            <div className="center-content">
                              <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                            </div>
                          </div>
                        </div>
                        <div className="thumb-overlay bg-black"></div>
                        <img src="../public/assets/image-resources/stock-images/img-20.jpg" alt=""/>
                      </div>
                      <div className="thumb-pane">
                        <h3 className="thumb-heading animated rollIn">
                          <a href="#" title="">Working in the morning</a>
                          <small>12 March 2015</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="thumbnail-box-wrapper mrg5A">
                      <div className="thumbnail-box">
                        <a className="thumb-link" href="#" title=""></a>
                        <div className="thumb-content">
                          <div className="center-vertical">
                            <div className="center-content">
                              <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                            </div>
                          </div>
                        </div>
                        <div className="thumb-overlay bg-black"></div>
                        <img src="../public/assets/image-resources/stock-images/img-23.jpg" alt=""/>
                      </div>
                      <div className="thumb-pane">
                        <h3 className="thumb-heading animated rollIn">
                          <a href="#" title="">Working in the morning</a>
                          <small>12 March 2015</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="thumbnail-box-wrapper mrg5A">
                      <div className="thumbnail-box">
                        <a className="thumb-link" href="#" title=""></a>
                        <div className="thumb-content">
                          <div className="center-vertical">
                            <div className="center-content">
                              <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                            </div>
                          </div>
                        </div>
                        <div className="thumb-overlay bg-black"></div>
                        <img src="../public/assets/image-resources/stock-images/img-24.jpg" alt=""/>
                      </div>
                      <div className="thumb-pane">
                        <h3 className="thumb-heading animated rollIn">
                          <a href="#" title="">Working in the morning</a>
                          <small>12 March 2015</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
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
            <div className="content-box">
              <h3 className="content-box-header bg-default"><i className="glyph-icon icon-cog"></i> Live server status <span className="header-buttons-separator">
                <a href="#" className="icon-separator remove-button" data-animation="flipOutX"><i className="glyph-icon icon-times"></i></a></span>
              </h3>
              <div className="content-box-wrapper pad0A">
                <div className="mrg20A">
                  <div className="row">
                    <div className="col-md-7 center-margin pad0A">
                      <canvas id="chart-area" width="150" height="150"></canvas>
                    </div>
                  </div>
                </div>
                <table className="table remove-background">
                  <tbody>
                    <tr>
                      <td className="text-left size-sm"><div className="badge mrg10L badge-small mrg5R bg-azure"></div>New user registrations</td>
                      <td className="text-right"><a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag"><i className="glyph-icon icon-flag"></i></a> <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit"><i className="glyph-icon icon-edit"></i></a> <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove"><i className="glyph-icon icon-remove"></i></a></td>
                    </tr>
                    <tr>
                      <td className="text-left size-sm"><div className="badge mrg10L badge-small mrg5R bg-orange"></div>Returning visitors</td>
                      <td className="text-right"><a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag"><i className="glyph-icon icon-flag"></i></a> <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit"><i className="glyph-icon icon-edit"></i></a> <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove"><i className="glyph-icon icon-remove"></i></a></td>
                    </tr>
                    <tr>
                      <td className="text-left size-sm"><div className="badge mrg10L badge-small mrg5R bg-gray"></div>Page views</td>
                      <td className="text-right"><a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag"><i className="glyph-icon icon-flag"></i></a> <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit"><i className="glyph-icon icon-edit"></i></a> <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove"><i className="glyph-icon icon-remove"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="panel-layout">
                  <div className="panel-box">
                    <div className="panel-content bg-facebook"><i className="glyph-icon font-size-35 icon-facebook"></i></div>
                    <div className="panel-content pad15A bg-white">
                      <div className="center-vertical">
                        <ul className="center-content list-group list-group-separator row mrg0A">
                          <li className="col-md-6"><b>1,456</b><p className="font-gray">Friends</p></li>
                          <li className="col-md-6"><b>593</b><p className="font-gray">Likes</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel-layout">
                  <div className="panel-box">
                    <div className="panel-content bg-twitter"><i className="glyph-icon font-size-35 icon-twitter"></i></div>
                    <div className="panel-content pad15A bg-white">
                      <div className="center-vertical">
                        <ul className="center-content list-group list-group-separator row mrg0A">
                          <li className="col-md-6"><b>356</b><p className="font-gray">Followers</p></li>
                          <li className="col-md-6"><b>981</b><p className="font-gray">Tweets</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
export default Main;


/*
<div className="container-fluid" id="display_sructure">
  <div className="row dtr">
  <Sidebar/>
  <Mainbar/>

  </div>
</div>*/

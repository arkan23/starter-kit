import React, { Component } from 'react';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
class Logo extends Component{
  render(){
    return(
      <div id="header-logo" className="logo-bg">
        <a href="/" className="logo-content-big" title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard Template</span></a>
         <a href="/" className="logo-content-small" title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard Template</span></a>
        <a id="close-sidebar" href="#" title="Close sidebar"><i className="glyph-icon icon-outdent"></i></a>
      </div>
    )
  }
}
export default Logo;

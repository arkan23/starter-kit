import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import Mainbar from '../components/Mainbar';

class Main extends Component{

  render(){
    return(
      <div className="container-fluid" id="display_sructure">
        <div className="row dtr">
        <Sidebar/>
        <Mainbar/>

        </div>
      </div>
    )
  }
}
export default Main;

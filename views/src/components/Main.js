import React, { Component } from 'react';
import  {Link}  from 'react-router';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';

//import './chart-demo-1.js'


import SBleft from './SBleft';
import SBright from './SBright';
import Navigate from './Navbar';
import Topbar from './Topbar';
import Infobar from './Infobar';
import Topbox from './main/Topbox';
import Weekgraf from './main/Weekgraf';
import Temperature from './main/Temperature';
import Tabledata from './main/Tabledata';
import Maincarousel from './main/Maincarousel';
import Dashstatic from './main/Dashstatic';
import Contentbox from './main/Contentbox';
import Followers from './main/Followers';
import Activity from './main/Activity';

class Main extends Component{

  constructor(){
    super();
    this.state={
      chartData:{}
    }
  }
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
          labels:['GUK','OSC','Hedelberg','Letus','IBM'],
          datasets:[{
            label: 'Population',
            data:[287,435,13,44,120,],
            backgroundColor:[
              'rgba(215,59,112,0.6)',
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)'
            ]
          }]
      }
    });
  }

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
              <div className="row">
                <div className="col-md-8">
                  <Topbox/>
                  <Weekgraf/>
                  <Temperature/>
                  <Tabledata/>
                  <Maincarousel/>
                </div>
                <div className="col-md-4">
                  <Dashstatic/>
                  <Contentbox chartData={this.state.chartData} />
                  <Followers/>
                  <Activity/>
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


//////////////////////////////////////////////////

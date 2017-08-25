import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


class Contentbox extends Component{

  constructor(props){
      super(props);
        this.state={
          chartData: props.chartData
        }
    }
  /*  static defaultProps={
    displayTitle:false,
    displayLegend:false,
    legendPosition:'none'
  }*/

  render(){
    return(
      <div className="content-box">
        <h3 className="content-box-header bg-default">
          <i className="glyph-icon icon-cog"></i> Live server status
          <span className="header-buttons-separator">
            <a href="#" className="icon-separator remove-button" data-animation="flipOutX">
              <i className="glyph-icon icon-times"></i>
            </a>
          </span>
        </h3>
        <div className="content-box-wrapper pad0A">
          <div className="mrg20A">
            <div className="row">
              <div className="col-md-7 center-margin pad0A">


                <Doughnut data={this.state.chartData} height={400} />


              </div>
            </div>
          </div>
          <table className="table remove-background">
            <tbody>
              <tr>
                <td className="text-left size-sm">
                  <div className="badge mrg10L badge-small mrg5R bg-azure"></div>New user registrations
                </td>
                <td className="text-right">
                  <a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag">
                    <i className="glyph-icon icon-flag"></i>
                  </a>
                  <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit">
                    <i className="glyph-icon icon-edit"></i>
                  </a>
                  <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove">
                    <i className="glyph-icon icon-remove"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-left size-sm">
                  <div className="badge mrg10L badge-small mrg5R bg-orange"></div>Returning visitors
                </td>
                <td className="text-right">
                  <a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag">
                    <i className="glyph-icon icon-flag"></i>
                  </a>
                  <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit">
                    <i className="glyph-icon icon-edit"></i>
                  </a>
                  <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove">
                    <i className="glyph-icon icon-remove"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-left size-sm">
                  <div className="badge mrg10L badge-small mrg5R bg-gray"></div>Page views
                </td>
                <td className="text-right">
                  <a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag">
                    <i className="glyph-icon icon-flag"></i>
                  </a>
                  <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit">
                    <i className="glyph-icon icon-edit"></i>
                  </a>
                  <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove">
                    <i className="glyph-icon icon-remove"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          )
        }
      }
export default Contentbox;


/*

import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


class Contentbox extends Component{
  render(){
    return(
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
          )
        }
      }
export default Contentbox;


*/

import React, { Component } from 'react';

class Tabledata extends Component{
  render(){
    return(
      <div className="panel">
          <div className="panel-body">
            <h3 className="title-hero">Basic</h3>
            <div className="example-box-wrapper">
              <table cellPadding="0" cellSpacing="0" className="table table-striped table-bordered" id="datatable-example">
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
          )
        }
      }
      export default Tabledata;

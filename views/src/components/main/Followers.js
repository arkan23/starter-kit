import React, { Component } from 'react';

class Followers extends Component{
  render(){
    return(
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
          )
        }
      }
export default Followers;

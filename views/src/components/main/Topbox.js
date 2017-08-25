import React, { Component } from 'react';

class Topbox extends Component{
  render(){
    return(
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
          )
        }
      }
      export default Topbox;

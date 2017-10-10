import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
class Orderlists extends Component{

    render(){
    return(
          <div className="panel">
            <div className="panel-body">
              <h3 className="title-hero">Order list</h3>
              <div className="example-box-wrapper">
                <table className="table table-hover">
                  <thead>
                    <tr><th></th><th>Статус</th><th>Артикул</th><th>Серия</th><th>Количество</th><th>Название</th><th>Создан</th></tr>
                  </thead>
                  <tbody>
                    {this.props.orders.map((data, i)=><tr key={i}><td> <i className="glyph-icon tooltip-button order-icon icon-newspaper-o" title=".icon-newspaper-o"></i></td><td>{data.status.name}</td><td>{data.article.name}</td><td>{data.batchNumber}</td><td>{data.quantity}</td><td>{data.name}</td><td>{data.created.toDateString()}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      }
  }
export default connect((state)=>{
  return {'orders': state.salex.initial.order}
})(Orderlists);

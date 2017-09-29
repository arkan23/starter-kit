import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
class Neworder extends Component{
    componentDidMount(){
      //console.log('___+++++++++++++___');
      //  console.log(this.props.orders.initial);
        //console.log(typeof this.props.orders.initial);
        //this.props.orders.initial.then((data)=>{data.order.map((d)=>{console.log('___@___')})});
    }

//    {this.props.orders.map((d)=><tr><td>#</td><td></td><td>Row 2</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>)}<tr><td>#</td><td></td><td>Row 2</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>

    render(){
      console.log('________________');
      //  console.log(this.props.orders.initial);
        //const mass=this.props.orders.order;   {mass.map((p)=><tr><th>Статус</th><th>Артикул</th><th>Серия</th><th>Количество</th><th>Название</th><th>Создан</th></tr>)}
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
                    {this.props.orders.initial.order.map((data, i)=><tr key={i}><td><i className="fa fa-address-card" aria-hidden="true"></i></td><td>{data.status.name}</td><td>{data.article.name}</td><td>{data.batchNumber}</td><td>{data.quantity}</td><td>{data.name}</td><td>{data.created.toDateString()}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      }
  }
export default connect((state)=>{
  return {'orders': state.salex}
})(Neworder);

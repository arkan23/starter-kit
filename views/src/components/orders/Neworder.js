import React, { Component } from 'react';
import {connect} from 'react-redux';
//import Sidebar from '../components/Sidebar';
//import Mainbar from '../components/Mainbar';
class Neworder extends Component{
  render(){
    let war=this.props.initial;
    return(
      <div className="panel">
        <div className="panel-body">
          <h3 className="title-hero">New order</h3>
          <div className="example-box-wrapper">
            <div className="row">
              <div className="col-md-12">
                <button type="button" className="btn btn-info mrg20B collapsed" data-toggle="collapse" data-target="#demo-2">Создать заказ</button>
                <div id="demo-2" className="collapse">
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">Panel title</h3>
                    </div>
                    <div className="panel-body">


                    <form className="form-horizontal bordered-row">

                      <div className="form-group">
                        <label className="col-sm-2 control-label">Артикул</label>
                        <div className="col-sm-9">
                          <select name="" className="custom-select">
                            <option></option>
                            {war.article.map((data,i)=><option key={i}>{data.name}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                          <label className="col-sm-2 control-label">Количество</label>
                            <div className="col-sm-9">
                              <input type="text" name="" className="form-control spinner-input"/>
                            </div>
                      </div>

                      <div className="form-group">
                        <label className="col-sm-2 control-label">Номер партии</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="" placeholder="Example placeholder..."/>
                        </div>
                      </div>



                        <div className="form-group">
                          <label htmlFor="" className="col-sm-2 control-label">Срок годности (дата)</label>
                          <div className="col-sm-9">
                            <div className="input-prepend input-group">
                              <span className="add-on input-group-addon">
                                <i className="glyph-icon icon-calendar"></i>
                              </span>
                              <input type="text" className="bootstrap-datepicker form-control"  data-date-format="mm/dd/yy"/>
                            </div>
                          </div>
                        </div>


                      <div className="form-group">
                        <label className="col-sm-2 control-label">Название</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="" placeholder="Example placeholder..."/>
                        </div>
                      </div>
                      <div className="form-group">
                          <label className="col-sm-2 control-label">Примечание</label>
                          <div className="col-sm-9">
                            <textarea name="" id="" className="form-control"></textarea>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="col-sm-2 control-label"></div>
                          <div className="col-sm-2">
                            <button className="btn btn-success">Сохранить</button>
                          </div>
                          <div className="col-sm-2">
                            <button className="btn btn-danger">Закрыть</button>
                          </div>
                      </div>
                    </form>



                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">Panel title</h3>
                    </div>
                    <div className="panel-body">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className="nav-link" href="#menu1" data-toggle="tab"><i className="glyph-icon tooltip-button icon-barcode" title=".icon-barcode"></i>Серийные номера</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#menu2" data-toggle="tab"><i className="glyph-icon tooltip-button icon-bars" title=".icon-bars"></i>Данные заказа</a>
                      </li>
                    </ul>

                    <div className="tab-content">
                        <div id="menu1" className="tab-pane fade">
                        <table className="table table-striped">
                          <tbody>
                            <tr><td></td><td><b>Всего</b></td><td><b>Использованно</b></td><td><b>Осталось</b></td><td><b>Годен</b></td><td><b>Брак</b></td><td></td><td></td></tr>

                          </tbody>
                        </table>
                        </div>
                        <div id="menu2" className="tab-pane fade">

                        <form className="form-horizontal bordered-row">

                          <div className="form-group">
                              <label className="col-sm-2 control-label">Количество</label>
                                <div className="col-sm-9">
                                  <input type="text" name="" value="" className="form-control spinner-input"/>
                                </div>
                          </div>

                          <div className="form-group">
                            <label className="col-sm-2 control-label">Номер партии</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" value="" id="" placeholder="Example placeholder..."/>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-2 control-label">Название</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" id="" placeholder="Example placeholder..."/>
                            </div>
                          </div>
                        </form>

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
export default connect((state)=>{
  return {'initial': state.salex.initial}
})(Neworder);

/*

<div className="panel">
  <div className="panel-body">
    <h3 className="title-hero">New order</h3>
    <div className="example-box-wrapper">
      <div className="row">
        <div className="col-md-12">
          <button type="button" className="btn btn-info mrg20B collapsed" data-toggle="collapse" data-target="#demo-2">Slide collapsible</button>
          <div id="demo-2" className="collapse">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">

              <form className="form-horizontal bordered-row">
                <div className="form-group">
                  <label className="col-sm-3 control-label">Input</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="" placeholder="Example placeholder..."/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Disabled input</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="" disabled="disabled" placeholder="Disabled input ..."/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Popover input</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control popover-button-default" placeholder="Input focus trigger popover" data-content="Popover content from &lt;b&gt;data-content&lt;/b&gt; attribute 3" title="Top popover" data-trigger="focus" data-placement="top"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Select</label>
                  <div className="col-sm-6">
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Select disabled</label>
                  <div className="col-sm-6">
                    <select className="form-control" disabled="disabled">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Custom select</label>
                  <div className="col-sm-6">
                    <select name="" className="custom-select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>
                </div>
              </form>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


*/

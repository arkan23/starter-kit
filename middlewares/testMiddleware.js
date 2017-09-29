const middleware=store => next => action =>{

  if(action.type=='DB'){
  const [startAction,successAction,failureAction]=action.actions;
    store.dispatch({
      type:successAction,
      payload: action.payload
    });


  }else{
    return next(action);
  }

}
export default middleware;

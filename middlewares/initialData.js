const middleware=store => next => action =>{

  if(action.type!='PROMISE'){

  /*  store.dispatch({
      type:successAction,
      payload: action.payload
    });*/
    console.log('not promise_redux');
    return next(action);
  }
  console.log('promise_redux');
  const [startAction,successAction,failureAction]=action.actions;
  store.dispatch({
    type: startAction
  });
  action.payload.then((data)=>store.dispatch({
        type:successAction,
        payload: data,
        }),(error)=>store.dispatch({
            type:failureAction,
            payload: error}));
}
export default middleware;

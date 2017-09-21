const middleware=store => next => action =>{

/*  if(action.then){
console.log("EEEEEE it is promise!!");
  }
return next(action);*/
  if(action.type!='PROMISE'){
    console.log('not promise');
    return next(action);
  }
  console.log('promise');
  const [startAction,successAction,failureAction]=action.actions;
  store.dispatch({
    type: startAction
  });
/*  action.payload.then((data) =>{
    if(data.then){
      console.log(typeof data +` is promis`);
    }else{
      console.log(data);
      console.log(typeof data +`  not fucking promis`);
      const objData=data;
      store.dispatch({
          type: successAction,
          payload: objData
        });
    }});*/
  //console.log(stringJson);
/*  action.payload.then(
  (data) => store.dispatch({
    type:successAction,
    payload:data
  }),
  (error) => store.dispatch({
    type:failureAction,
    payload:error
  }));*/

  action.payload.then((data)=>{

      store.dispatch({
        type:successAction,
        payload:{per: 'data'},
      });
});
  //  cot data=action.payload.then((data)=>{return data});
    //console.log(data);

/*  store.dispatch({
    type: successAction,
    payload: {per: 'data1'}
  });*/
  //action.payload.then((data)=>console.log(data));
}

export default middleware;

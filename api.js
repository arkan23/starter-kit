require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export function getIssues(){
  return fetch('http://pokeapi.co/api/v2/pokemon/')
  //.then((res)=>{res.json()})
  .then(function(response) {
              if (response.status >= 400) {
                  throw new Error("Bad response from server");
              }
              return response.json();
          });
        /*  .then(function(response) {

              return response;
          });*/

}
export function getData(){
  return [{mass: [1,2,4,10000],text: 'wer'},{peren:{},ver: "ver"},{bool:false}];
}

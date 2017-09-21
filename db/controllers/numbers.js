import _ from 'lodash';
import TestCollection from '../models/TestCollection';

/**
 * List All numbers (no)
 */
 const selectAll =() => {
//return new Promise((resolve)=>{
//console.log('start to selec All data in collection');
   const data=TestCollection.find({});
   return data;
   //resolve(true);
 //});
 };

 export default selectAll;

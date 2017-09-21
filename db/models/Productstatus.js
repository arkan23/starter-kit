import mongoose from 'mongoose';
import _ from 'lodash';

const {Schema}=mongoose;

const StatusSchema=new Schema({
  _id: String,
  "name" : String,
  "status" : { type: Number, ref: 'Numbers' }
},{
  "timestamps":true
});
//hjgjhg

export default mongoose.model("Productstatus",StatusSchema);
//export default mongoose.model("Articletest",ArticleSchema);

import mongoose from 'mongoose';
import _ from 'lodash';

const {Schema}=mongoose;

const ArticleSchema=new Schema({
  _id: String,
  "name" : String,
  "template" : String,
  "GTIN" : String,
  "expiryPeriod" : Number
},{
  "timestamps":true
});

export default mongoose.model("Articles",ArticleSchema);

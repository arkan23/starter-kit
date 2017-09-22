import mongoose from 'mongoose';

//const {Schema}=mongoose;

const ArticleSchema=new mongoose.Schema({
  _id: String,
  name : String,
  template : {type: String, ref: 'ArticleTemplate'},
  snsSources:{
      0:{
        id: String,
        alphavit: String,
        length: Number,
      },
      2:{
        id: String,
        alphavit: String,
        length: Number,
        gs1Prefix: String,
      },
      3:{
        id: String,
        alphavit: String,
        length: Number,
        gs1Prefix: String,
      },
  },
  gtin : String,
  expiryPeriod : Number,
  special: Number,
});

export default mongoose.model("Articles",ArticleSchema);

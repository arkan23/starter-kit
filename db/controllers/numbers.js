import _ from "lodash";
import Product from "../models/Product";
//import TestCollection from "../models/TestCollection";
import Line from "../models/Line";
import ArticleTemplate from "../models/ArticleTemplate";
import Article from "../models/Article";
import Order from "../models/Order";
import OrderStatus from "../models/OrderStatus";
import ProductStatus from "../models/ProductStatus";
import User from "../models/User";
import Device from "../models/Device";

/**ArticleTemplate
 * List All numbers (no)
 */
 /// comment
 function randWDclassic(countNum,boxChild,palletChild,length,lengthp,lengthb,
 											abd='abcdefghijklmnopqrstuvwxyz0123456789',
 											abdb='abcdefghijklmnopqrstuvwxyz0123456789',
 											abdp='abcdefghijklmnopqrstuvwxyz0123456789',
 											type,
 											typeb,
 											typep,
 											levels,boxCount,pallCount){  // [ 3 ] random words and digits by the wocabulary


      let aL = abd.length,aLp = abdp.length,aLb = abdb.length;
 	    let massPallet=[],massBox=[],massSerials=[];

     	//  1000 / 20 / 4 /
     	const boxNum=Math.ceil(countNum/boxChild);
     	const palletNum=Math.ceil(boxNum/palletChild);
     	//const countNum=1000;
     	//const boxNum=50;
     	//const palletNum=13;
     //console.log(palletNum);

     if(typep=='datamatrix'){
     	for (let i = 0; i < palletNum; i++) {

     		let s ='';
     		while(s.length < lengthp) s += abdp[Math.random() * aLp|0];
     		let text='parent';


     			massPallet[i]={
     								_id: s,
     								article: 'levels',
     								order: 'order',
                    aggregation:0,
     								status: 1,
     								serialized: new Date(),
     								line: 'line1',
     								parent: text
     							}
     	}
     }else{
     	for (let i = 0; i < palletNum; i++) {
     		let s ='';
     		const numLength=lengthp-typep.length;
     		while(s.length < numLength) s += abdp[Math.random() * aLp|0];
     		let text='parent';
     			massPallet[i]={
     								_id: typep+s,
     								article: 'levels',
     								order: 'order',
                    aggregation:0,
     								status: 1,
     								serialized: new Date(),
     								line: 'line1',
     								parent: text
     							}
     	}
     }




     if(typeb=='datamatrix'){
     	let j=0;
     	let count=0;
     	for (let i = 0; i < boxNum; i++) {
     		let s ='';
     		while(s.length < lengthb) s += abdb[Math.random() * aLb|0];
     			if(count<palletChild){
     				massBox[i]={
     									_id: s,
     									article: 'levels',
     									order: 'order',
     									status: 1,
                      aggregation:0,
     									serialized: new Date(),
     									line: 'line1',
     									parent: massPallet[j]._id
     								}
     				count++;
     			}else{
     				j++;
     				i--;
     				count=0;
     			}
     	}
     }else{
     		let j=0;
     		let count=0;
     	for (let i = 0; i < boxNum; i++) {
     		let s ='';
     		const numLength=lengthb-typeb.length;
     		while(s.length < numLength) s += abdb[Math.random() * aLb|0];
     			if(count<palletChild){
     				massBox[i]={
     									_id: typeb+s,
     									article: 'levels',
     									order: 'order',
     									status: 1,
                      aggregation:0,
     									serialized: new Date(),
     									line: 'line1',
     									parent: massPallet[j]._id
     								};
     				count=count+1;
     			}else{
     				j++;
     				i--;
     				count=0;
     			}
     	}
     }



     if(type=='datamatrix'){
     	let j=0;
     	let count=0;
     	for (let i = 0; i < countNum; i++) {
     		let s ='';
     		while(s.length < length) s += abd[Math.random() * aL|0];
     			if(count<boxChild){
     				massSerials[i]={
     									_id: s,
     									article: 'levels',
     									order: 'order',
     									status: 1,
                      aggregation:0,
     									serialized: new Date(),
     									line: 'line1',
     									parent: massBox[j]._id
     								}
     				count++;
     			}else{
     				j++;
     				i--;
     				count=0;
     			}
     	}
     }else{
     	let j=0;
     	let count=0;
     	for (let i = 0; i < countNum; i++) {
     		let s ='';
     		const numLength=length-type.length;
     		while(s.length < numLength) s += abd[Math.random() * aL|0];
     			if(count<boxChild){
     				massSerials[i]={
     									_id: type+s,
     									article: 'levels',
     									order: 'order',
     									status: 1,
                      aggregation:0,
     									serialized: new Date(),
     									line: 'line1',
     									parent: massBox[j]._id
     								}
     				count++;
     			}else{
     				j++;
     				i--;
     				count=0;
     			}
     	}
     }
     var united=_.unionBy(massPallet, massBox,massSerials,'_id');
     	//var zipped = _.zip(massPallet, massBox, massSerials);

 	    return united;
 }
 //console.log(randWDclassic(100,20,4,10,10,10,'0123456789','abcdefghijklmnopqrstuvwxyz0123456789','abcdefghijklmnopqrstuvwxyz0123456789','datamatrix','123450','123456'));
// console.log(randWDclassic(10,10,"123456789"));

/////////////////////////////////////////////////
// ADD NEW data
/////////////////////////////////////////////////
/*const selectAll = () => {
  let initialData={};
  initialData.article =Article.find({});
  initialData.line = Line.find({});
  initialData.order = Order.find({});
  console.log('select data');
  //initialData[3] = await Product.find({});
  return initialData;
};*/
 const selectAll = async () => {
   let initialData={};
   initialData.article = await Article.find({});
   initialData.line = await Line.find({});
   initialData.order = await Order.find({}).populate('article').populate('status');
   console.log('select data');
   //initialData[3] = await Product.find({});
   return initialData;
 };



 const generateNumbers=async (options=true)=>{
   let date=new Date;
   let broken=0;
   await console.log('___date flag___1 '+date.getMinutes()+'-'+date.getSeconds()+'-'+date.getMilliseconds());
   const mongoNumbers= Product.find({},{_id:1});
   date=new Date;
   await console.log('___date flag___2 '+date.getMinutes()+'-'+date.getSeconds()+'-'+date.getMilliseconds());
   const newNumbers=randWDclassic(30000,20,4,13,18,18,'0123456789','abcdefghijklmnopqrstuvwxyz0123456789','abcdefghijklmnopqrstuvwxyz0123456789','datamatrix','123450','123456')
   date=new Date;
   await console.log('___date flag___3 '+date.getMinutes()+'-'+date.getSeconds()+'-'+date.getMilliseconds());
   //broken=await _.intersectionBy(newNumbers,mongoNumbers,'_id') ;
   broken=await _.intersectionBy(mongoNumbers,newNumbers,'_id') ;
   let numbers=await _.unionBy(newNumbers,broken,'_id');
   await console.log('broken numbers: '+broken.length);
   await console.log('true numbers: '+numbers.length);
   let newCount=await numbers.length/1000;
   numbers=await _.chunk(numbers, 1000);

   date=new Date;
   await console.log('___date flag___4 '+date.getMinutes()+'-'+date.getSeconds()+'-'+date.getMilliseconds());
   for(let i=0;i<newCount;i++){
     Product.create(numbers[i]);

   }
     date=new Date;
   await console.log('___date flag___5 '+date.getMinutes()+'-'+date.getSeconds()+'-'+date.getMilliseconds());
   return true;
 }



 const addLine = async () => {


   const line = await Line.create({_id:"Line1",name:"Line1",devices:"TQSSM",state:"stopped",order:"s0"});

   return line;
 };


 const addOrder = async (options) => {
   const order = await Order.create({gs1Data:{
     "0":{"10":options.batch,"17":dateConvert(options.expDate),"01":options.gtin},
     "2":{"10":options.batch,"02":options.gtin},
     "3":{"10":options.batch}
   },
   credentials:0,
   article:options.article,
   expireDate:options.expDate,
   quantity:options.quantity,
   batchNumber:options.batch,
   name:options.name,
   comments:options.comments,
   creator:options.creator,
   status:10,
   snCount:{"0":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "1":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "2":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "3":{"1":0,"2":0,"3":0,"4":0,"5":0},
          },
   line:options.line
  },
     function (err, small) {if (err) return handleError(err)});
   return order;
 };



 const addArticle = async (options) => {
   const article= Article.create({
     name:options.name,
     template:options.template,
     snsSourse:{"0":{id:options.id,alphavit:options.alphavit,length:options.length},
                "2":{id:options.id,alphavit:options.alphavit,length:options.length,gs1Prefix:options.gs1Prefix},
                "3":{id:options.id,alphavit:options.alphavit,length:options.length,gs1Prefix:options.gs1Prefix},},
     gtin:options.gtin,
     expiryPeriod:options.expPer,
     special:0
   },
    function (err, small) {if (err) return handleError(err)});
   return article;
 };



 const addArticleTemplate = async (options) => {
   const articleTemplate = ArticleTemplate.create({
     name:options.name,
     aggregation:{"0":{displayName:"serialization",chidCount:options.serialization},
                  "2":{displayName:"box",chidCount:options.box},
                  "3":{displayName:"pallet",chidCount:options.pallet}},
     gs1Data:{
            "0":{
                  "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1},
                  "17":{name:"[17] Expiration Date (N6)",displayName:"[17] Expiration Date (N6)",_type:"string",writable:1},
                  "01":{name:"[01] GTIN (N14)",displayName:"[01] GTIN (N14)",_type:"string",writable:1},
                },
            "2":{
                  "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1},
                  "02":{name:"[02] GTIN of Contained Trade Items (N14)",displayName:"[02] GTIN of Contained Trade Items (N14)",_type:"string",writable:1},
                },
            "3":{
                  "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1}
                },
   }});
   return articleTemplate;
 };






 /////////////////////////////////////////////////
 // END ADD NEW data
 /////////////////////////////////////////////////

 /////////////////////////////////////////////////
 // SELECT NEW data
 /////////////////////////////////////////////////


 /////////////////////////////////////////////////
 // END SELECT NEW data
 /////////////////////////////////////////////////

/*



 const addProduct = async () => {


   const product = await Product.create(randWDclassic(100,20,4,10,10,10,'0123456789','abcdefghijklmnopqrstuvwxyz0123456789','abcdefghijklmnopqrstuvwxyz0123456789','datamatrix','123450','123456'));

   return product;
 };


 const addArticleTemplate_Test = async () => {
   const articleTemplate = ArticleTemplate.create({
     name:"SSCC_1",
     aggregation:{"0":{displayName:"serialization",childCount:20},
                  "2":{displayName:"box",childCount:4},
                  "3":{displayName:"pallet",childCount:1}
                 },
     gs1Data:{
              "0":{
                   "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1},
                   "17":{name:"[17] Expiration Date (N6)",displayName:"[17] Expiration Date (N6)",_type:"string",writable:1},
                   "01":{name:"[01] GTIN (N14)",displayName:"[01] GTIN (N14)",_type:"string",writable:1},
                  },
              "2":{
                   "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1},
                   "02":{name:"[02] GTIN of Contained Trade Items (N14)",displayName:"[02] GTIN of Contained Trade Items (N14)",_type:"string",writable:1},
                  },
              "3":{
                   "10":{name:"[10]Batch or Lot Number(X..20)",displayName:"[10]Batch or Lot Number(X..20)",_type:"string",writable:1}
                  }
              },
    });
   return articleTemplate;
 };

 const addArticle_Test = async () => {
   const article= Article.create({
     name:'testArticle',
     template:'59c8df6e98b2ae14ba259ab9',
     snsSourse:{"0":{id:'Datamatrix',alphavit:'0123456789',length:13},
                "2":{id:'SSCC',alphavit:'0123456789',length:18,gs1Prefix:'0123456'},
                "3":{id:'SSCC',alphavit:'0123456789',length:18,gs1Prefix:'0123456'},
               },
     gtin:'01234561234560',
     expiryPeriod:365,
     special:0
   });
   return article;
 };



 const addOrder_Test = async () => {
   const order = await Order.create({gs1Data:{
     "0":{"10":'1234',"17":'210918',"01":'01234561234560'},
     "2":{"10":'1234',"02":'01234561234560'},
     "3":{"10":'1234'}
   },
   credentials:0,
   article:'59c8e3c22d9fea177d8acc60',
   expireDate:Date("2018-09-21T08:06:59.138+0000"),
   quantity:300,
   batchNumber:1234,
   name:'test_order',
   comments:'_no',
   creator:'user',
   status:10,
   snCount:{"0":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "1":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "2":{"1":0,"2":0,"3":0,"4":0,"5":0},
            "3":{"1":0,"2":0,"3":0,"4":0,"5":0},
          },
   line:'Line1'
  },
     function (err, small) {if (err) return handleError(err)});
   return order;
 };


 const orderStatus_Test = async () => {
   const article= await OrderStatus.create([{
     _id:1,
     name:'Finished'
   },{
     _id:20,
     name:'Closed'
   },{
     _id:4,
     name:'Suspended'
   },{
     _id:11,
     name:'Starting'
   },{
     _id:12,
     name:'Stopping'
   },{
     _id:13,
     name:'Error'
   },{
     _id:5,
     name:'Generating'
   },{
     _id:14,
     name:'Loaded'
   },{
     _id:15,
     name:'Unloaded'
   },{
     _id:16,
     name:'Unassigned'
   }]);
   return article;
 };


 const productStatus_Test = async () => {
   const article= await ProductStatus.create([{
     _id:1,
     name:'New'
   },{
     _id:2,
     name:'Fetched'
   },{
     _id:3,
     name:'Ok'
   },{
     _id:4,
     name:'NOk'
   }]);
   return article;
 };

 const user_Test = async () => {
   const article= await User.create({
     name:'admin',
     password:'admin'
   });
   return article;
 };

 const addDevice_Test = async () => {
   const device= await Device.create({
     _id: 'TQSLM1',
     name: 'TQSLM1',
     _type: 'TQSLM',
     vid: '1529',
     pid: '8721',
     state: 'stopped',
     autoConnect: 1,
     log: 1,
     host: '192.168.30.10',
     port: '7973',
     enableLogging: true,
     liveSNUpdate: true,
     productionArea: 'Production',
     samplesArea: 'Samples',
     order: '59c8e7c2e65cf0193f7a7252',
     orderName: 'test_order',
   });
   return device;
 };
*/

 export default selectAll;

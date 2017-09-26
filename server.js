import express from 'express';
import router from './routes/index';
import connect from './db/connect';
const connectToMongo=connect();
let app = express();
import _ from 'lodash';
app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));


app.use('/', router);
app.use('/view/*', router);
app.use('/salex', router);
app.use('/automenu', router);
app.use('/store', router);
app.use('/orders', router);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});

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
								status: 'new',
								serialized: 'null',
								line: 'line1',
								parent: text
							}
	}
}else{
	for (let i = 0; i < palletNum; i++) {
		let s ='';
				//console.log(i);
		const numLength=lengthp-typep.length;
		while(s.length < numLength) s += abdp[Math.random() * aLp|0];
		let text='parent';
			massPallet[i]={
								_id: typep+s,
								article: 'levels',
								order: 'order',
								status: 'new',
								serialized: 'null',
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
									status: 'new',
									serialized: 'null',
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
		console.log(i);
		const numLength=lengthb-typeb.length;
		while(s.length < numLength) s += abdb[Math.random() * aLb|0];
			if(count<palletChild){
				console.log(count);
				massBox[i]={
									_id: typeb+s,
									article: 'levels',
									order: 'order',
									status: 'new',
									serialized: 'null',
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
									status: 'new',
									serialized: 'null',
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
									status: 'new',
									serialized: 'null',
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
	//var zipped = _.zip(massPallet, massBox, massSerials);

	return massBox;
}
console.log(randWDclassic(100,20,4,10,10,10,'0123456789','abcdefghijklmnopqrstuvwxyz0123456789','abcdefghijklmnopqrstuvwxyz0123456789','datamatrix','123450','123456'));
/// comment___2

///whith new stage-1

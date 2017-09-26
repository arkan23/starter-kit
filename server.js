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


/// comment___2

///whith new stage-1

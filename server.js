import express from 'express';
import router from './routes/index';

let app = express();

app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));


app.use('/', router);
app.use('/view/*', router);
app.use('/plans', router);
app.use('/store', router);

app.listen(3002, function () {
	console.log('Hello World listening on port 3000!');
});

/// comment

/// comment___2


///whith new stage-1

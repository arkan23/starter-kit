import mongoose from 'mongoose';
import loadModels from './models';
export default () => {
  // Find the appropriate database to connect to, default to localhost if not found.
  const connect = () => {

      return new Promise((resolve,reject)=>{
          mongoose.Promise = require('bluebird');
          mongoose.set('debug', false);
          var dbURI = 'mongodb://localhost:27017/salex';

          // Create the database connection
          //setTimeout(()=>{mongoose.connect(dbURI,{ useMongoClient: true, })},6000)
          mongoose.connect(dbURI,{ useMongoClient: true, });

          // CONNECTION EVENTS
          // When successfully connected
          resolve(mongoose.connection.on('connected', function () {
            console.log('Mongoose default connection open to ' + dbURI);
          }));

          // If the connection throws an error
          reject(mongoose.connection.on('error',function (err) {
            console.log('Mongoose default connection error: ' + err);
          }));

          // When the connection is disconnected
          mongoose.connection.on('disconnected', function () {
            console.log('Mongoose default connection disconnected');
          });
        });

    };

  connect();

  loadModels();
};

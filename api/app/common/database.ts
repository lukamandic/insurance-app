import * as mongoose from 'mongoose';

const connectionString = 'mongodb://<admin>:<secret>@<localhost>:<27017>/<insurance>'

mongoose.connect(connectionString)
.then(() => console.log('Connected to MongoDB.'))
.catch(err => console.log('Error connecting to MongoDB:', err))

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection is open')
})
  
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection has occured ${err} error`)
})
  
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected')
})

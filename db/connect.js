const mongoose = require('mongoose')

const connectDb = (url) =>  {
 return mongoose.connect(url, {
    useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: true,
     useUnifiedTopology: true,
 })
}
module.exports = connectDb
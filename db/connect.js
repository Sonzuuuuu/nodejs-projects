const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://sonzualejandrino:hQOo8hZKlhXMiFUt@nodeexpressprojects.qsoumam.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDb = (url) =>  {
 return mongoose.connect(connectionString, {
    useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: true,
     useUnifiedTopology: true,
 })
}
module.exports = connectDb
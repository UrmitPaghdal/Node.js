const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const connect = await mongoose.connect(`mongodb://localhost/Blog-Project`);
        console.log(`DataBase connect on host :- ${connect.connection.host}`);
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = connectDB;
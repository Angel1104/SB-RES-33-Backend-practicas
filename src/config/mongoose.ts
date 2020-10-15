import mongoose from "mongoose";


const MONGO_URI = 'mongodb://localhost/userbd';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI || process.env.MOGODB_URL, {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology: true,
        })
            .then(db => console.log('DB conectado'));
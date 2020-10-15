import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
       type: String, 
       required: true
        },
  email: { type: String,
            required: true, 
            unique: true ,
            match: /.+\@.+\..+/
         },
  password: { type: String,
              required: true,
              unique: true,
              validate: [
                function(password){
                    return password.length >= 6;
                },
                'Minimo 6 caracteres  '] 
            },
  username: { type: String, 
              required: true, 
              lowercase: true,
              exists: true
             },
 age:{
     type: Number,
     min: 18,
     max: 104,
     required:true
 }

});

export default model("User", UserSchema);
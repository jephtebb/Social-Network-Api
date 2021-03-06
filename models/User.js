const { Schema, model } = require('mongoose');

const UserSchema = new Schema(

    {
    username:{
        type: String,
        unique: true,
        require: 'username is required',
        trim: true
    },
    email:{
        type: String,
        require: 'email is required',
        unique: true,
        match: [/^\S+@\S+\.\S+$/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},

{
    toJSON: {
      virtuals: true,
    },
    id: false
  }
)

  // get total number of friends a user has
    UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  // create the User model using the UserSchema
  const User = model('User', UserSchema);
    // export the User model
  module.exports = User;
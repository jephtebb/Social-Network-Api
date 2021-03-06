const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const moment = require('moment');


const formatDate = (date) => moment(date).format('YYYY-MM-DD');

const ThoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            require: 'thought is required',
            minlength: 1,
            maxlength: 280
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: formatDate

        },
        username: {
            type: String,
            require: 'username is required'
        },
        reactions: [
            ReactionSchema
        ],
        
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
          },
          id: false
    }
)


  // get total number of reactions
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  // create the Thought model using the ThoughtSchema
  const Thought = model('Thought', ThoughtSchema);



 
    // export the Thought model
  module.exports = Thought;
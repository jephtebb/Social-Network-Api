const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

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
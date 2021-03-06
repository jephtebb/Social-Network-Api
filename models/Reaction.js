const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
            default: new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            require: 'reaction body is required',
            maxlength: 280
        },
        username: {
            type: String,
            require: 'username is required'
        },
        createAt: {
            type: Date,
            default: Date.now,
        }
    }
)
module.exports = ReactionSchema
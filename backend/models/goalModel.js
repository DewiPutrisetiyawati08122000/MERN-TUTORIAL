const mongoose = require('mongoose')
const goalSchema = mongoose.Schema(
    {
        Text: {
            type: String,
            required: [true, 'Please add text value']
        },

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose,this.model('Goals', goalSchema)
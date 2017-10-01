import * as mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    estvalue: Number
})

const Item = mongoose.model('Item', itemSchema)

export { Item }

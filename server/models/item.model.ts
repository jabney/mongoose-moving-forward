import * as mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    estvalue: Number
}, { strict: false })

const Item = mongoose.model('Item', itemSchema)

// Custom validator
Item.schema.path('estvalue').validate((value) => {
    return value > 0
}, 'Estimated value must be greater than zero')

export { Item }

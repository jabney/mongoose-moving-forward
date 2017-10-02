import * as mongoose from 'mongoose'
import * as timestampsPlugin from 'mongoose-times'
// import { updatedOnPlugin } from '../plugins/updated-on'
import { valueIndicatorPlugin } from '../plugins/value-indicator'

const itemSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    estvalue: Number
}, { strict: false })

// itemSchema.plugin(updatedOnPlugin)
itemSchema.plugin(timestampsPlugin)
itemSchema.plugin(valueIndicatorPlugin)

const Item = mongoose.model('Item', itemSchema)

// Custom validator
Item.schema.path('estvalue').validate((value) => {
    return value > 0
}, 'Estimated value must be greater than zero')

export { Item }

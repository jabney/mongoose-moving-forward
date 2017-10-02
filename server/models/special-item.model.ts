import * as mongoose from 'mongoose'
import { Item } from './item.model'

const specialItemSchema = new mongoose.Schema({
  hazardCode: String,
  requiresInsurance: { type: Boolean, default: true }
})

const SpecialItem = Item.discriminator('SpecialItem', specialItemSchema)

export { SpecialItem }

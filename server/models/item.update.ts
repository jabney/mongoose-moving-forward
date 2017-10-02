import * as mongoose from 'mongoose'
import { Item } from './item.model'

function itemUpdateHelper(req, res) {

  if (req.body.estvalue >= 200) {
    Item.schema.add({
      requiresInsurance: { type: Boolean, default: true }
    })
  } else {
    Item.schema.remove('requiresInsurance')
    if (req.body.requiresInsurance) {
      req.body.requiresInsurance = false
    }
  }

  const updateItem = new Item(req.body)
  Item.findOneAndUpdate({ _id: req.params.id }, updateItem, function (err) {
    if (err) { return console.error(err) }
    res.sendStatus(200, updateItem)
  })

    /**
     * This code from the Module 6 Demo video didn't work
     * as intended. The 'add' method updates the original schema
     * and doesn't return a value. It ended up just adding
     * 'requiresInsurance' to the Item schema in perpetuity.
     */
    // const insuredItemSchema = Item.schema.add({
    //   requiresInsurance: { type: Boolean, default: true }
    // }) as any

    /**
     * assert(Item === InsuredItem) // true
     */
    // const InsuredItem = mongoose.model('Item', insuredItemSchema)
    // newItem = new InsuredItem(req.body)
}

export { itemUpdateHelper }

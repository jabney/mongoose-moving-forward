import * as mongoose from 'mongoose'
import { Item } from './item.model'

function itemSaveHelper(req, res) {
  if (req.body.estvalue >= 200) {
    Item.schema.add({
      requiredInsurance: { type: Boolean, default: true }
    })

    /**
     * This code from the Module 6 Demo video didn't work
     * as intended. The 'add' method updates the original schema
     * and doesn't return a value. It ended up just adding
     * 'requiredInsurance' to the Item schema in perpetuity.
     */
    // const insuredItemSchema = Item.schema.add({
    //   requiredInsurance: { type: Boolean, default: true }
    // }) as any

    /**
     * assert(Item === InsuredItem) // true
     */
    // const InsuredItem = mongoose.model('Item', insuredItemSchema)
    // newItem = new InsuredItem(req.body)
  }

  const newItem = new Item(req.body)

  newItem.save(function (err, obj) {
    // Remove the 'requiredInsurance' path from the schema.
    Item.schema.remove('requiredInsurance')
    if (err) { return console.error(err) }
    res.status(200).json(obj)
  })
}

export { itemSaveHelper }

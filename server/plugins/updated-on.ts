
function updatedOnPlugin(schema, options) {
  schema.add({ updatedOn: Date })

  schema.pre('save', function (next) {
    this.updatedOn = new Date()
    next()
  })

  if (options && options.index) {
    schema.path('updatedOn').index(options.index)
  }
}

export { updatedOnPlugin }

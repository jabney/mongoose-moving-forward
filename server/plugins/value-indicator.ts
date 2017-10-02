
function valueIndicatorPlugin(schema) {
  schema.post('find', function (result) {
    result.forEach(function (element) {
      if (element.estvalue >= 100) {
        element.description += ' ($)'
      }
    }, this)
  })
}

export { valueIndicatorPlugin }

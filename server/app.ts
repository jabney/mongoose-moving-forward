import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'
import * as path from 'path'

import itemApi from './item/item.api'
import searchApi from './search/search.api'

const app = express()
dotenv.load({ path: '.env' })
app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('dev'))

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(process.env.MONGODB_TEST_URI)
} else {
  mongoose.connect(process.env.MONGODB_URI)
}

const db = mongoose.connection as any
(<any>mongoose).Promise = global.Promise

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')

  // APIs
  itemApi(app)
  searchApi(app)

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  if (!module.parent) {
    app.listen(app.get('port'), () => {
      console.log('Mongoose Continued listening on port ' + app.get('port'))
    })
  }

})

export { app }

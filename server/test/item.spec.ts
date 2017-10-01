import * as chai from 'chai'
import * as chaiHttp from 'chai-http'

process.env.NODE_ENV = 'test'
import { app } from '../app'
import { Item } from '../models/item.model'

const should = chai.use(chaiHttp).should()

describe('Api tests for Items', () => {

  beforeEach(done => {
    Item.remove({}, err => {
      done()
    })
  })

  it('should get all the items', done => {
    chai.request(app)
      .get('/api/items')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(0)
        done()
      })
  })

  it('should get items count', done => {
    chai.request(app)
      .get('/api/items/count')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('number')
        res.body.should.be.eql(0)
        done()
      })
  })

  it('should create new item', done => {
    const item = {
      name: 'precious',
      description: 'my precious',
      category: 'mine',
      estvalue: Infinity
    }
    chai.request(app)
      .post('/api/item')
      .send(item)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.a.property('name')
        res.body.should.have.a.property('description')
        res.body.should.have.a.property('category')
        res.body.should.have.a.property('estvalue')
        done()
      })
    })

  it('should get an item by its id', done => {
    const item = new Item({
      name: 'precious',
      description: 'my precious',
      category: 'mine',
      estvalue: Infinity
    })
    item.save((error, newItem) => {
      chai.request(app)
        .get(`/api/item/${newItem.id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('name')
          res.body.should.have.property('description')
          res.body.should.have.property('category')
          res.body.should.have.property('estvalue')
          res.body.should.have.property('_id').eql(newItem.id)
          done()
        })
    })
  })

  it('should update a item by its id', done => {
    const item = new Item({
      name: 'precious',
      description: 'my precious',
      category: 'mine',
      estvalue: Infinity
    })
    item.save((error, newItem) => {
      chai.request(app)
        .put(`/api/item/${newItem.id}`)
        .send({ weight: 5 })
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })

  it('should delete an item by its id', done => {
    const item = new Item({
      name: 'precious',
      description: 'my precious',
      category: 'mine',
      estvalue: Infinity
    })
    item.save((error, newItem) => {
      chai.request(app)
        .delete(`/api/item/${newItem.id}`)
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
})

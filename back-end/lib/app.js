
const db = require('./db')
const express = require('express')
const cors = require('cors')
const authenticator = require('./authenticator')

const app = express()
const authenticate = authenticator({
  jwks_uri: 'http://127.0.0.1:5556/dex/keys'
})

app.use(require('body-parser').json())
app.use(cors())

app.get('/', (req, res) => {
  res.send([
    '<h1>ECE DevOps Chat</h1>'
  ].join(''))
})

// Channels

app.get('/channels', authenticate, async (req, res) => {
  const channels = await db.channels.list()
  res.json(channels)
})

app.post('/channels', async (req, res) => {
  const channel = await db.channels.create(req.body)
  res.status(201).json(channel)
})

app.get('/channels/:id', async (req, res) => {
  const channel = await db.channels.get(req.params.id)
  res.json(channel)
})
app.post('/channels/delete/:id', async (req, res) => {
  const channel = await db.channels.delete(req.params.id)
  res.json(channel)
})
app.put('/channels/:id', async (req, res) => {
  const channel = await db.channels.update(req.body)
  res.json(channel)
})
// Members
app.get('/channels/:id/members', async (req, res) => {
  const members = await db.members.list(req.params.id)
  res.json(members)
})
// Messages

app.get('/channels/:id/messages', async (req, res) => {
  const messages = await db.messages.list(req.params.id)
  res.json(messages)
})

app.post('/channels/:id/messages', async (req, res) => {
  const message = await db.messages.create(req.params.id, req.body)
  res.status(201).json(message)
})

app.post('/channels/:id/messages/:creation', async (req, res) => {
  const response = await db.messages.delete(req.params.id, req.params.creation)
  res.json(response)
})
app.post('/channels/:id/messages/:creation/:author/:content', async (req, res) => {
  const response = await db.messages.update(req.params.id, 
                  req.params.creation, 
                  req.params.author, 
                  req.params.content)
  res.json(response)
})

// Users

app.get('/users', async (req, res) => {
  const users = await db.users.list()
  res.json(users)
})

app.post('/users', async (req, res) => {
  if(!req.body) throw Error('Not received: user')
  const user = await db.users.create(req.body)
  res.status(201).json(user)
})

app.get('/users/:id', async (req, res) => {
  const user = await db.users.get(req.params.id)
  res.json(user)
})

app.put('/users/:id', async (req, res) => {
  const user = await db.users.update(req.body)
  res.json(user)
})

module.exports = app

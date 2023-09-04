const express = require('express')
const spotify = express.Router()

spotify.get('/login', (req, res) => {
  res.send('GET request to the login')
})
spotify.get('/auth', (req, res) => {
  res.send('GET request to the auth')
})
spotify.get('/token', (req, res) => {
  res.send('GET request to the token')
})
spotify.get('/status', (req, res) => {
  res.send('GET request to the status')
})
spotify.get('/search', (req, res) => {
  res.send('GET request to the search')
})

module.exports = spotify
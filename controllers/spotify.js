const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env
const axios = require('axios')
const {SpotifyToken } = require('../models')

const redirect_uri = 'http://localhost:3001/spotify/v1/auth'
const currentTime = new Date().getTime()

const login = async (req, res ) => {
    // TODO state = randomstring.generate(16)
    res.redirect('https://accounts.spotify.com/authorize?')

}
import mongoose from 'mongoose'

const TokenSchema = new mongoose.Schema({
    access_token: {
        type: String, 
        required: []
    },
    token_type: {
        type: String,
    },
    expires_in: {
        type: BigInt,
    },
    refresh_token: {
        type: String
    }
})

export default mongoose.models.SpotifyToken || mongoose.model('SpotifyToken', TokenSchema)
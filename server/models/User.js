import config from '@config'

import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Bcrypt from 'bcryptjs'
import Randomstring from 'randomstring'

import Mail from '@fullstackjs/mail'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    emailConfirmedAt: Date,
    emailConfirmCode: String,
})

UserSchema.pre('save', function () {
    this.password = Bcrypt.hashSync(this.password)
    this.emailConfirmCode = Randomstring.generate(72)
    this.createdAt = new Date()
})

UserSchema.post('save', async function () {

    await new Mail('confirm-account')
        .to(this.email, this.name)
        .subject('Please confirm your account')
        .data({
            name: this.name,
            url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
        })
        .send()

})

UserSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, config.jwtSecret)
}

export default mongoose.model('User', UserSchema)
import User from '@models/User'
import config from '@config'
import jwt from 'jsonwebtoken'

const login = (req, res) => {}

const register = async (req, res) => {
    
    const { name, email, password } = req.body
    
    const user = await User.create({
        name, email, password
    })

    // const token = user.generateToken()

    const token = jwt.sign({ id: user.id }, config.jwtSecret)


    return res.status(201).json({ user, token })

}

export default {
    login,
    register,
}

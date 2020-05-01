import Express from 'express'
import Mongoose from 'mongoose'
import Morgan from 'morgan'
import config from '@config'
import v1Router from '@routes'
import path from 'path'
import BodyParser from 'body-parser'

import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

Mongoose.connect(
    config.databaseUri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('database connecting')
    }
)

const app = Express()

app.use(Morgan('dev'))

app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json())

const compiler = Webpack(WebpackConfig)

app.use(WebpackDevMiddleware(compiler, {
    hot: true,
    publicPath: WebpackConfig.output.publicPath
}))

app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)

app.use(Express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
    console.log('server started successfully on port 3000')
})

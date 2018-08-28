const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 3000)
const authors = require('./routes/authors')
const books = require('./routes/books')

app.use(cors())
app.use(bodyParser.json())
app.use('/authors', authors)
app.use('/books', books)

app.listen(port)
    .on('error', console.error.bind(console))
    .on('listening', console.log.bind(console, 'Listening on ' + port));

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    })
})

module.exports = app
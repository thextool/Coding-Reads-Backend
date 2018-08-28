const express = require('express')
const router = express.Router()

const queries = require('../queries/get')

router.get('/', (req, resp, next) => {
    queries.listAll('books')
        .then(data => {resp.json({data})})
        .catch(next)
})

module.exports = router
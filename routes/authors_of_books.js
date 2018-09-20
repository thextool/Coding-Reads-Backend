const express = require('express')
const router = express.Router()

const queries = require('../queries/get')

router.put("/edit/:id", (request, response, next) => {
    queries.updateBook(request.params.id, request.body).then(books => {
        response.json({books: books});
    }).catch(next);
});

module.exports = router
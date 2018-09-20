const express = require('express')
const router = express.Router()

const queries = require('../queries/get')

router.get('/', (req, resp, next) => {
    queries.listAll('authors')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.delete("/delete", (request, response, next) => {
    let authorsId = request.body.author_id
    authorsId.forEach(id => {
        queries.deleteAuthorOfOnlyOneBook(id)
        .then(() => {
            response.status(204).json({deleted: true});
        }).catch(next);
    })
});

module.exports = router
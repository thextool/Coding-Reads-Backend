const express = require('express')
const router = express.Router()

const queries = require('../queries/get')

router.get('/', (req, resp, next) => {
    queries.listAll('books')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.get('/:id', (request, response, next) => {
    queries.bookAuthors(request.params.id).then(author => {
        author
            ? response.json({author})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/new", (request, response, next) => {
    let authorIdArray = request.body.author_id
    queries.createBook(request.body.book)
    .then(book => {
        authorIdArray.forEach(id => {
            let authorsOfBooks = new Object()
            authorsOfBooks.book_id = book.id
            authorsOfBooks.author_id = id
            queries.createJoin(authorsOfBooks)
        })
        response.status(201).json({book:book});
    }).catch(next);
});

router.delete("/delete/:id", (request, response, next) => {
    queries.deleteBook(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/edit/:id", (request, response, next) => {
    queries.updateBook(request.params.id, request.body).then(books => {
        response.json({books: books});
    }).catch(next);
});

module.exports = router
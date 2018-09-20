const db = require('../db-connection')

module.exports = {
    listAll(tableName) {
        return db(tableName).select('*')
    },
    bookAuthors(id) {
        return db('authors')
            .select('authors.first_name', 'authors.last_name')
            .from('authors').where('authors_of_books.book_id', id)
            .innerJoin('authors_of_books','authors.id','authors_of_books.author_id')
    },
    createBook(book) {
        return db('books')
            .insert(book)
            .returning('*')
            .then(record => record[0])
    },
    createJoin(authorsOfBooks) {
        return db('authors_of_books')
            .insert(authorsOfBooks)
            .returning('*')
            .then(record => record[0])
    },
    deleteBook(id) {
        return db('books')
        .delete()
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteAuthorOfOnlyOneBook(id) {
        return db('authors')
        .delete()
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    updateBook(id, bookInfo){
        return db('books')
        .update(bookInfo)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    updateJoin(id, bookAuthorID){
        return db('authors_of_books')
        .update(bookAuthorID)
        .where({author_id: id, book_id: bookAuthorID.book_id})
        .returning('*')
        .then(record => record[0])
    }
}
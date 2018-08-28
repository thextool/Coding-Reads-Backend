
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors_of_books', authorsOfBooks => {
        authorsOfBooks.integer('author_id')
            .notNullable()
            .references('id')
            .inTable('authors')
            .onDelete('CASCADE')
            .index()
        authorsOfBooks.integer('book_id')
            .notNullable()
            .references('id')
            .inTable('authors')
            .onDelete('CASCADE')
            .index()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors_of_books')
};

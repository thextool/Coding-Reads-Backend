
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', books => {
        books.increments()
        books.text('title')
        books.text('genre')
        books.text('cover_image_url')
        books.text('description')
        books.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books')
};

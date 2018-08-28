
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', authors => {
        authors.increments()
        authors.text('first_name')
        authors.text('last_name')
        authors.text('portrait_url')
        authors.text('biograghy')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors')
};  

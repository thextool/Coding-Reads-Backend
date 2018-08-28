// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/coding_reads'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}

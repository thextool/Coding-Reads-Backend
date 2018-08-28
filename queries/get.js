const db = require('../db-connection')

module.exports = {
    listAll(tableName) {
        return db(tableName).select('*')
    }
}
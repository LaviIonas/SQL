// Update with your config settings.
const settings = require("./settings.json");
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            user: settings.user,
            password: settings.password,
            database: settings.database,
            host: settings.hostname,
            port: settings.port,
            ssl: settings.ssl
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
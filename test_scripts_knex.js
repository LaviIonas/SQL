const settings = require("./settings"); // settings.json
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        user: settings.user,
        password: settings.password,
        database: settings.database,
        host: settings.hostname,
        port: settings.port,
        ssl: settings.ssl
    }
});
const userSearch = process.argv[2];


knex('famous_people')
  .where({ first_name: userSearch})
  .orderBy('id', 'desc')
  .asCallback((err,rows) => {
    // console.log(rows);
    rows.forEach(function(x) {
      console.log(x);
    });
  });



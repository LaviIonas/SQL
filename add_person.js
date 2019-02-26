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
const first = process.argv[2];
const last = process.argv[3];
const date = process.argv[4];
knex('famous_people')
.insert({
    first_name: first,
    last_name: last,
    birthdate: date
    })
.asCallback((err, rows) => {
    console.log(rows);
});

knex('famous_people')
  .orderBy('id', 'desc')
  .asCallback((err,rows) => {
    // console.log(rows);
    rows.forEach(function(x) {
      console.log(x);
    });
  });

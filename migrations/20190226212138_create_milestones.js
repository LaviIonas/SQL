
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('famous_people', function(table){
      table.string('milestones');
      table.date('date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('famous_people', function(table){
      table.dropColumn('milestones');
      table.dropColumn('date');
    })
  ])
};

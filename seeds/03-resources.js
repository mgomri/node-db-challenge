
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {name: 'carrot'},
        {name: 'stick'},
        {name: 'wings'},
        {name: 'money'},
        {name: 'fork'}
      ]);
    });
};

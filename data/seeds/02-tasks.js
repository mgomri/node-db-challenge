
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description:'spread your wings',
          notes:'the left wing needs an alignment',
          completed:false,
          project_id:2
        },
        {
          description:'wear a mask',
          notes:'be aware of the dog',
          completed:false,
          project_id:3
        }
      ]);
    });
};
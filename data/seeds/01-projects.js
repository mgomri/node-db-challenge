
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Steal the sun', 
          completed:'false'
        },
        { 

          name: 'Fly like an eagle into the future', 
          completed:false
        },
        {
          name: 'Get a life', 
          completed:false
        }
       
      ]);
    });
};

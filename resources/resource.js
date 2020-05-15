const knex = require('knex');
const config = require ('../knexfile');
const db = knex(config.development);

module.exports = {
    add,
    find,
    findById,  
};


function add(resource){
    return db('resources')
        .insert(resource, 'id')
        .then(ids => ({ id: ids[0]}));
};

function find () {
    return db('resources');
};

function findById(id){
    return db('resources')
        .where({ id }).first();
}
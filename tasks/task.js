const knex = require('knex');
const config = require ('../knexfile');
const db = knex(config.development);

module.exports = {
    add,
    find,
    findById,  
};


function add(task){
    return db('tasks')
        .insert(task, 'id')
        .then(ids => ({ id: ids[0]}));
};

function find () {
    return db('tasks');
};

function findById(id){
    return db('tasks')
        .where({ id }).first();
};


function update(changes, id){
    return db('tasks')
    .where('id', Number(id))
    .update(changes);
};

function remove (id){
    return db('tasks')
    .where('id', Number(id))
    .del();
};
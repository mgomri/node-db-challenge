const knex = require('knex');
const config = require ('../knexfile');
const db = knex(config.development);

module.exports = {
    add,
    find,
    findById,
    remove,
    update
};


function add(project){
    return db('projects')
        .insert(project, 'id')
        .then(ids => ({ id: ids[0]}));
};

function find () {
    return db('projects');
};

function findById(id){
    return db('projects')
        .where({ id }).first();
}

function update(changes, id){
    return db('projects')
    .where('id', Number(id))
    .update(changes);
}

function remove (id){
    return db('projects')
    .where('id', Number(id))
    .del();
};


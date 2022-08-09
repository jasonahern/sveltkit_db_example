const { Model } = require('objection');
const knex = require('knex');
const KnexConfig = require('./knexDbConfig');

 Model.knex(knex(KnexConfig))

module.exports =  Model;
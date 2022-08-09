const Users = require('../../src/database/models/users_model');

async function users(fastify){

    fastify.get('/', async function (request, reply){
        const { id, user } = request.query;
        console.log(`${id} : ${user}`);
        const data = await Users.query();
        //console.log(data);
        reply.send(data);
      
      });

}



module.exports = users;
const Lottery = require('../../src/database/models/lottery_model');

async function test(fastify){

    fastify.get('/', async function (request, reply){
        //Lottery.fromJson();
        const data = await Lottery.query();
        //console.log(data);
        reply.send(data);
      
      });

}



module.exports = test;
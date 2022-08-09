const Lottery = require('../src/database/models/lottery_model');

async function routes(fastify){
    
    fastify.get('/help', async function (request, reply){
        //Lottery.fromJson();
        const data = await Lottery.query();
        reply.send(data);
      
      });

}



module.exports = routes;
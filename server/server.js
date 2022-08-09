// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const autoload = require('@fastify/autoload')
const path = require('path');
require('dotenv').config();
// const Lottery = require('./src/database/models/lottery_model.js');
fastify.register(require('@fastify/cors'));
fastify.register(require('@fastify/helmet'));

/**
 *  @param {import('fastify').FastifyInstance} fastify
 */


// Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })




// fastify.register(require('./routes/lottery_routes'), {
//   prefix : '/api/v1'
// });
fastify.register(autoload, {
  dir: path.join(__dirname, 'routes'),
  options: { prefix: '/api/v1'}
})

fastify.register(autoload, {
  dir: path.join(__dirname, 'plugins')
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(4000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()



const cookie = require('@fastify/cookie');
const session = require('@fastify/session');
const fastifyPlugin = require('fastify-plugin');
const appConfig = require('../config/appConfig');

/**
 *  @param {import('fastify').FastifyInstance} fastify
 */

const plugin = async (fastify, options, done) => {
    fastify.register(cookie);
    fastify.register(session,{
        secret: appConfig.sessionSecret,
        saveUninitialised: false, //stops the website from autogenerating a cookie, simply by the user browsing to it.  Instead, this ensures it creates a session manually
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV != 'development'
        }
    });
    fastify.decorate('cookie', cookie);
    fastify.decorate('session', session);
    done();
};

module.exports = fastifyPlugin(plugin);
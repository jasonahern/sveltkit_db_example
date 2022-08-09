function loadEnvironmentVariable(keyname) {
    const envar = process.env[keyname];
    if (!envar) {
        throw new Error(`Must include ${keyname} as an environment variable.`);
    }
    return envar;    
}

function loadArrayEnvVariable(keyname){
    return loadEnvironmentVariable(keyname).split(',');
}

module.exports = {
    dbClient : loadEnvironmentVariable('DB_CLIENT'),
    dbHost : loadEnvironmentVariable('HOST'),
    dbPassword : loadEnvironmentVariable('PASSWORD'),
    dbUser : loadEnvironmentVariable('USER'),
    dbDatabase : loadEnvironmentVariable('DATABASE'),
    sessionSecret : loadArrayEnvVariable('SESSION_SECRET')
};
/*
*Create and export environment variables
*/

//Continer for all the environtment
var environments = {};

//staging default environments
environments.staging = {
    httpPort: 3000,
    httpsPort: 3001,
    envName: 'staging'
}

//production default environments
environments.production = {
    httpPort: 5000,
    httpsPort: 5001,
    envName: 'production'
}

//check which environment passed in command line
var currentEnvironment = typeof(process.env.NODE_ENV) == "string" 
    ? process.env.NODE_ENV.toLowerCase() : '';

//check if currentEnvironment is one the environments, if not set default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == "object" 
    ? environments[currentEnvironment] : environments.staging;

module.exports = environmentToExport;


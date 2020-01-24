import path from 'path'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}
const rootPath = path.normalize(__dirname + '/..')
const env = process.env.NODE_ENV || 'development'
const packageJson = require('./../../package.json')

const conf = {
  development: {
    root: rootPath,
    app: {
      name: packageJson.name,
      version: packageJson.version,
    },
    port: process.env.PORT || 3000,
    webDomain: process.env.DOMAIN || 'localhost',
    secretKey: process.env.SECRETKEY || 'demo_secret_key',
    expiresIn: '24hr',
    db: {
      uri: process.env.AUTHENAPP_DB_URI,
      host: process.env.AUTHENAPP_DB_DATABASEHOST,
      dbname: process.env.AUTHENAPP_DB_DATABASENAME,
      name: process.env.AUTHENAPP_DB_NAME,
      password: process.env.AUTHENAPP_DB_PASSWORD,
    },
    apiName: 'api'
  },
  production: {
    root: rootPath,
    app: {
      name: packageJson.name,
      version: packageJson.version,
    },
    port: process.env.PORT,
    webDomain: process.env.DOMAIN,
    secretKey: process.env.SECRETKEY,
    expiresIn: '24hr',
    db: {
      uri: process.env.AUTHENAPP_DB_URI,
      host: process.env.AUTHENAPP_DB_DATABASEHOST,
      dbname: process.env.AUTHENAPP_DB_DATABASENAME,
      name: process.env.AUTHENAPP_DB_NAME,
      password: process.env.AUTHENAPP_DB_PASSWORD,
    },
    apiName: 'api'
  }
}

export default conf[env]

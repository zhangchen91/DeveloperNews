'use strict';

module.exports = appInfo => {
  const config = {
    sequelize: {
      dialect: 'mysql',
      database: 'graphql',
      host: '127.0.0.1',
      port: '3306',
      username: 'root',
      password: 'root',
    },
    proxyworker: {
      port: 10086,
    },
    middleware: ['graphql'],
    security: {
      csrf: {
        ignore: () => true,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513335740138_6031';

  // add your config here
  config.middleware = [];

  return config;
};

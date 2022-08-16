/*
 * @Date: 2022-08-10 17:22:56
 * @Description: 文件描述
 */
/* eslint valid-jsdoc: "off" */
'use strict';
const dbConfig = require('./db.config');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    keys: appInfo.name + '_1660123358018_7459',
    security: {
      csrf: {
        enable: false,
      },
      // xframe: {
      //   enable: false,
      // },
      // enable: false,
    },
    multipart: {
      fileSize: '1024MB',
      whitelist: [
        '.zip',
        '.7z',
        '.rar',
        '.csv',
        '.png',
        '.jpg',
        '.jpeg',
        '.bmp',
        '.xls',
        '.xlsx',
        '.docx',
        '.doc',
        '.ppt',
        '.pdf',
      ],
    },
    bodyParser: {
      enable: true,
      jsonLimit: '2mb',
      formLimit: '2mb',
    },
    onerror: {
      json(err, ctx) {
        // json hander
        ctx.body = { message: 'error', err };
        ctx.status = 500;
      },
    },
    middleware: [ 'auth', 'errHandle' ],
  };

  const userConfig = {
    platformId: '',
    sequelize: {
      ...(dbConfig.dbOptions || {}),
      // delegate: 'models',
      // baseDir: 'models',
      // datasources: [
      //   {
      //     delegate: 'models',
      //     baseDir: 'models',
      //     database: 'map_train',
      //   },
      // ],
    },
    mysql: {
      client: dbConfig.dbOptions,
      app: true,
      agent: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

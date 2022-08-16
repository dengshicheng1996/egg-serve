/*
 * @Date: 2022-08-10 17:22:56
 * @Description: 文件描述
 */
'use strict';

const requireDirectory = require('require-directory');

module.exports = app => {
  requireDirectory(module, `${process.cwd()}/app/router`, {
    visit: route => route(app),
  });
};

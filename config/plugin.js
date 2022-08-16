/*
 * @Date: 2022-08-10 17:22:56
 * @Description: 文件描述
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};

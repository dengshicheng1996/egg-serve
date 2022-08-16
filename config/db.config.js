/*
 * @Date: 2022-08-15 09:58:49
 * @Description: 文件描述
 */

const path = require('path');

module.exports = {
  dbOptions: {
    dialect: 'mysql',
    host: '',
    port: '3306',
    database: '',
    username: 'root',
    user: 'root',
    password: '',
  },
  options: {
    type: 'js',
    dir: path.join(process.cwd(), '/app/models'),
    tables: [ '' ],
  },
};

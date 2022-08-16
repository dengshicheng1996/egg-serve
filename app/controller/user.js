/*
 * @Date: 2022-08-10 17:22:56
 * @Description: 文件描述
 */
'use strict';

const { BaseController } = require('../core');

class HomeController extends BaseController {
  // 查批量
  async index() {
    const { ctx } = this;
    console.log('this.query', this.query);
    ctx.body = 'hi, egg';
  }
  // 查单个
  async show() {
    console.log('this.query', this.query);
    this.body = 'hi, egg';
  }
  // 创建
  async create() {
    console.log('this.query', this.query);
    this.body = 'hi, egg';
  }
  // 更新单个
  async update() {
    console.log('this.query', this.query);
    this.body = 'hi, egg';
  }
  // 删除单个
  async destroy() {
    console.log('this.query', this.query);
    this.body = 'hi, egg';
  }
}

module.exports = HomeController;

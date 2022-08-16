/*
 * @Date: 2022-08-10 17:22:56
 * @Description: 文件描述
 */
'use strict';

const { BaseController } = require('../core');

class HomeController extends BaseController {
  // 查批量
  async index() {
    const { service, pageSize, current, limit, offset, where } = this;
    const data = await service.home.findAndCountAll(where, limit, offset);
    this.success({
      ...data,
      current,
      pageSize,
    });
  }
  // 查单个
  async show() {
    const { service, uuid } = this;
    const data = await service.home.findOne(uuid);
    this.success(data);
  }
  // 创建
  async create() {
    const { service, reqBoby } = this;
    await service.home.create(reqBoby);
    this.success();
  }
  // 更新单个
  async update() {
    const { service, ctx, reqBoby, uuid } = this;
    ctx.validate({
      is_del: 'boolean',
    });
    await service.home.findOne('123123');
    await service.home.update(reqBoby, uuid);
    this.success();
  }

  // 删除单个
  async destroy() {
    const { service, uuid } = this;
    await service.home.findOne(uuid);
    await service.home.destroy(uuid);
    this.success();
  }

  async bulkCreate() {
    const { service, reqBoby } = this;
    await service.home.bulkCreate(reqBoby);
    this.success();
  }
}

module.exports = HomeController;

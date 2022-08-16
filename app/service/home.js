/*
 * @Date: 2022-08-12 14:00:11
 * @Description: 文件描述
 */
const { BaseService } = require('../core');
const { v4: uuid } = require('uuid');

class HomeService extends BaseService {
  async findOne(uuid) {
    try {
      const { dataValues } = await this.model.Knowledge.findOne({
        // attributes: [ 'id', 'uuid' ],
        where: {
          uuid,
        },
      });
      return dataValues;
    } catch (error) {
      error.status = 406;
      error.errors = [ '12' ];
      throw error;
    }
  }

  async findAndCountAll(where = {}, limit, offset, order = []) {
    const { count, rows } = await this.model.Knowledge.findAndCountAll({
      order,
      limit,
      offset,
      where: {
        is_del: 0,
        ...where,
      },
    });
    return {
      total: count,
      list: rows,
    };
  }

  async create(data) {
    const { dataValues } = await this.model.Knowledge.create({
      ...data,
      uuid: uuid(),
      first_visit_time: Date.now(),
    });
    return dataValues;
  }

  async update(data, uuid) {
    await this.model.Knowledge.update(data, {
      where: {
        uuid,
      },
      returning: true,
      plain: true,
    });
  }

  async destroy(uuid) {
    await this.model.Knowledge.update({ is_del: 1 }, {
      where: {
        uuid,
      },
      returning: true,
    });
  }

  async bulkCreate(data = []) {
    const res = await this.model.Knowledge.bulkCreate(data, {
      returning: true,
    });
    return (res || []).map(r => r?.t_knowledge?.dataValues);
  }

  async bulkUpdate(data = []) {
    const res = await this.model.Knowledge.bulkCreate(data, {
      updateOnDuplicate: [ 'id', 'is_del' ],
      returning: true,
    });
    return (res || []).map(r => r?.t_knowledge?.dataValues);
  }
}

module.exports = HomeService;


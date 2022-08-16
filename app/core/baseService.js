const Service = require('egg').Service;
const omit = require('lodash/omit');

class BaseService extends Service {
  get model() {
    return this.ctx.model;
  }

  get limit() {
    return Number(this.ctx.query.pageSize || 0);
  }

  get offset() {
    const { current, pageSize } = this.ctx.query;
    return (current - 1) * pageSize;
  }

  get where() {
    return omit(this.ctx.query, [ 'current', 'pageSize' ]);
  }

  get reqBoby() {
    return this.ctx.request.body;
  }

  get uuid() {
    return this.ctx.params.id;
  }

  get curl() {
    return this.ctx.curl;
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = BaseService;

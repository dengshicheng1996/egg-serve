/*
 * @Date: 2022-08-12 10:11:33
 * @Description: 文件描述
 */
const { Controller } = require('egg');
const omit = require('lodash/omit');

class BaseController extends Controller {
  get pageSize() {
    return Number(this.ctx.query.pageSize || 0);
  }

  get current() {
    return Number(this.ctx.query.current || 0);
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

  get query() {
    return this.ctx.query;
  }

  get queries() {
    return this.ctx.queries;
  }

  get params() {
    return this.ctx.params;
  }

  get uuid() {
    return this.ctx.params.id;
  }

  get reqBoby() {
    return this.ctx.request.body;
  }

  get file() {
    return this.ctx.request.files[0];
  }

  get files() {
    return this.ctx.request.files;
  }

  get stream() {
    return this.ctx.getFileStream();
  }

  get curl() {
    return this.ctx.curl;
  }

  success(data = null) {
    this.ctx.body = data;
  }

  validationErr(err) {
    const { message, errors, code } = err;
    this.ctx.body = {
      code: 400,
      msg: message,
      errors,
      name: code,
    };
  }

  clientErr(errors) {
    console.log('clientErr======', errors);
    this.ctx.body = {
      code: 200,
      // errors: {
      //   name,
      //   msg: errors[0].message,
      // },
    };
  }
  error(err) {
    const { name, errors, message } = err;
    this.ctx.body = {
      code: 500,
      msg: message,
      errors,
      name,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;

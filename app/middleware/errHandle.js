/*
 * @Date: 2022-08-15 18:09:33
 * @Description: 文件描述
 */
// const msgtip = {
//   200: '请求正确',
//   400: '请求参数错误',
//   406: '请求被拒绝/校验未通过，需要读取msg数据做提示',
//   407: '请求被拒绝/校验未通过，需要读取data数据做提示',
//   500: '服务异常错误'
// }

module.exports = () => {
  return async function errHandle(ctx, next) {
    try {
      await next();
    } catch (err) {
      // console.log(err.message);
      // ctx.app.emit('error', err, ctx);
      const body = {
        type: err.code ? err.name + ': ' + err.code : err.name,
        msg: err.message,
        errors: err.errors || [],
        status: err.status || 500,
      };
      if (err.status === 422) {
        body.detail = err.errors;
      } else {
        ctx.app.emit('error', err, ctx);
      }

      ctx.body = body;
      ctx.status = err.status || 500;
    }
  };
};

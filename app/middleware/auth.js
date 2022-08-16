/*
 * @Date: 2022-08-11 10:10:52
 * @Description: 文件描述
 */
module.exports = (_, app) => {
  return async function auth(ctx, next) {
    // const { authUrl, platformId } = app.config;
    // const cookies = ctx.headers.cookie;
    // const o = {};
    // cookies.split(';').forEach(r => {
    //   const list = r.split('=');
    //   o[list[0]] = list[1];
    // });
    // const mbcTicket = o.mbc_ticket;
    // const res = await ctx.curl(`${authUrl}?ticket=${mbcTicket}&platform_id=${platformId}`, {
    //   headers: {
    //     contentType: 'application/json; charset=utf-8',
    //   },
    //   dataType: 'json',
    // });
    // if (res.data.error_no !== 0) {
    //   ctx.body = {
    //     ...res,
    //   };
    //   ctx.status = res.status;
    //   return;
    // }
    await next();
  };
};

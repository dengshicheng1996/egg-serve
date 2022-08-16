/*
 * @Date: 2022-08-11 11:38:29
 * @Description: 文件描述
 */
module.exports = app => {
  const { router, controller } = app;
  const subRouter = router.namespace('/api');
  subRouter.resources('home', '/v1/home', controller.home);
  subRouter.post('/v1/home/bulkCreate', controller.home.bulkCreate);
  // subRouter.get('/', controller.home.index);
  // subRouter.get('/list', controller.home.list);
  // subRouter.get('/detail', controller.home.detail);
};

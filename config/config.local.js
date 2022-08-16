/*
 * @Date: 2022-08-11 10:33:27
 * @Description: 文件描述
 */
module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    authUrl: '',
    platformId: '',
  };

  return {
    ...config,
  };
};

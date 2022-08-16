/*
 * @Date: 2022-08-10 18:44:23
 * @Description: 文件描述
 */
const { BaseService } = require('../core');

class UserService extends BaseService {
  async find() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.mysql.get('users', { id: 11 });
    return { user };
  }
}

module.exports = UserService;

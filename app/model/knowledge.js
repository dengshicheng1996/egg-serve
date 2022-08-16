/*
 * @Date: 2022-08-12 14:43:28
 * @Description: 文件描述
 */
module.exports = app => {
  const { STRING, DECIMAL, DATE, BIGINT, UUID, BOOLEAN } = app.Sequelize;

  const Knowledge = app.model.define('knowledge', {
    id: {
      type: BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: '自增主键',
    },
    uuid: {
      type: UUID,
      allowNull: false,
      unique: true,
      comment: '知识id(业务使用)',
    },
    type: {
      type: BOOLEAN,
      defaultValue: 0,
      allowNull: false,
      comment: '知识类型：1.作业规范；2.作业指导',
    },
    file_type: {
      type: BOOLEAN,
      allowNull: false,
      comment: '文件类型，1：word；2：视频；3：其他',
    },
    file_extension: {
      type: STRING(20),
      allowNull: true,
      comment: '文件扩展名',
    },
    title: {
      type: STRING(100),
      allowNull: false,
      comment: '知识标题',
    },
    cover_pic_url: {
      type: STRING,
      allowNull: true,
      comment: '封面图片url',
    },
    synopsis: {
      type: STRING(200),
      allowNull: true,
      comment: '简介',
    },
    visit_num: {
      type: STRING(200),
      allowNull: true,
      defaultValue: 0,
      comment: '访问次数',
    },
    first_visit_time: {
      type: DATE,
      allowNull: false,
      comment: '',
    },
    if_pub: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: '否发布：0.未发布；1.已发布',
    },
    pub_user_id: {
      type: STRING(50),
      allowNull: false,
      comment: '发布人id',
    },
    pub_staffname: {
      type: STRING(20),
      allowNull: true,
      comment: '发布人',
    },
    is_del: {
      type: BOOLEAN,
      allowNull: false,
      comment: '是否删除：0:正常数据,未删除；1:已删除',
    },
    evaluation_score: {
      type: DECIMAL(10, 1),
      allowNull: false,
      defaultValue: 0.0,
      comment: '是否删除：0:正常数据,未删除；1:已删除',
    },
    release_date: {
      type: DATE,
      allowNull: false,
      defaultValue: 0.0,
      comment: '最新版本发布的时间，初始默认为记录登记时间',
    },
    version_uuid: {
      type: STRING(36),
      allowNull: false,
      comment: '关联t_knowledge_version表uuid存最新发布版本id',
    },
  }, {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    underscored: true,
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return Knowledge;
};

module.exports = {
  // 通用配置
  port: 3000,
  env: 'development',

  // 安全配置
  security: {
    jwtSecret: 'your-default-secret-key',
    corsOrigin: ['http://localhost:3000'],
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15分钟
      max: 100 // 每个IP每15分钟最多100次请求
    }
  },

  // 日志配置
  logger: {
    level: 'info',
    format: 'combined',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/app.log' })
    ]
  }
};
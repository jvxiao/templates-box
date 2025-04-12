const dotenv = require('dotenv');
const path = require('path');

// 根据环境加载不同配置文件
const env = process.env.NODE_ENV || 'development';
const baseConfigPath = path.join(__dirname, `${env}.config.js`);
const defaultConfigPath = path.join(__dirname, 'default.config.js');

// 加载配置优先级：环境配置 > 默认配置
try {
  const envConfig = require(baseConfigPath);
  return { ...require(defaultConfigPath), ...envConfig };
} catch (error) {
  console.error(`⚠️  ${baseConfigPath} 文件不存在，使用默认配置`);
  return require(defaultConfigPath);
}
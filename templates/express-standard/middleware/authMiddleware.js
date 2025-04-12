const jwt = require('jsonwebtoken');

module.exports = (options = {}) => {
  return async (req, res, next) => {
    try {
      // 从请求头获取 token
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw new Error('Authentication required');

      // 验证 JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // 注入用户信息到请求对象
      
      next();
    } catch (error) {
      next({
        statusCode: 401,
        message: 'Invalid or expired token'
      });
    }
  };
};

// 使用示例
// router.get('/protected', auth(), protectedController);
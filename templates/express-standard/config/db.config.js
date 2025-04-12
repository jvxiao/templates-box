module.exports = {
  mysql: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'my_database',
    connectionLimit: 10
  },
  
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};
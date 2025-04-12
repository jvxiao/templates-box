module.exports = {
  service: process.env.MAIL_SERVICE || 'Gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  defaults: {
    from: '"My App" <no-reply@myapp.com>'
  }
};
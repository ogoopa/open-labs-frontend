const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      pathRewrite: {'^/alticci' : ''}
    }
  ];
  module.exports = proxy;
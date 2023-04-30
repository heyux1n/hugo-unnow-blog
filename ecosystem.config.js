module.exports = {
  apps: [
    {
      name: 'hugo-blog-server',
      script: 'hugo',
      args: 'server --bind=0.0.0.0 --buildDrafts'
    }
  ]
};

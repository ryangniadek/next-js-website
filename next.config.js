module.exports = {
    async redirects() {
      return [
        {
          source: '/resume',
          destination: 'https://docs.google.com/document/d/1NzTWgMwNbMZQWcV3C73mEa8xHUr-D3-CZPg45Ebhfd4/export?format=pdf',
          permanent: true,
        },
      ]
    },
  }
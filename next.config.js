module.exports = {
    async redirects() {
      return [
        {
          source: '/resume',
          destination: 'https://docs.google.com/document/d/1NzTWgMwNbMZQWcV3C73mEa8xHUr-D3-CZPg45Ebhfd4/export?format=pdf',
          permanent: true,
        },
	{
	  source: '/political-resume',
	  destination: 'https://docs.google.com/document/d/1cyVwt3XPnN0hnBGgElY7C1yqvCKt5yE4PWXr9vgE0aw/export?format=pdf',
	  permanent: true,	
	},
      ]
    },
  }

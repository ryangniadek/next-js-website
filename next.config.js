module.exports = {
    async redirects() {
      return [
        {
          source: '/resume',
          destination: 'https://docs.google.com/document/d/1NzTWgMwNbMZQWcV3C73mEa8xHUr-D3-CZPg45Ebhfd4/export?format=pdf',
          permanent: true,
        },
	{
	  source: '/playlist',
	  destination: 'https://open.spotify.com/playlist/2yigOU680KQPLpe1Eu0C9y?si=7bb9c4332bc44609',
	  permanent: true,	
	},
	{
	  source: '/calendar',
	  destination: 'https://calendly.com/rgniadek',
	  permanent: true,	
	}, 
      ]
    },
  }

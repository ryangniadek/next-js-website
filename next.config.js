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
          destination: 'https://outlook.office.com/bookwithme/user/f41f8c58f8a34da3bb4f297f82d59962@gniadek.net',
          permanent: true,
        },
        {
          source: '/certs',
          destination: 'https://credly.com/users/ryangniadek',
          permanent: true,
        },
        {
          source: '/certifications',
          destination: '/certs',
          permanent: true,
        },
        {
          source: '/signal',
          destination: 'https://signal.me/#eu/k6v2O6CTIjULhZRkfs03PAk3yiVRxlB_Ipgvjw35jLUq22Mt4fRF37gNGxW5opaT',
          permanent: true,
        },
      ]
    },
  }

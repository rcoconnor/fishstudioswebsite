module.exports = {
  siteMetadata: {
    title: "fishstudios",
  },
    plugins: [
        'gatsby-plugin-react-helmet', 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images', 
                path: 'src/content',
            },
        },
        'gatsby-transformer-sharp', 
        'gatsby-plugin-sharp', 
        {
            resolve: 'gatsby-plugin-manifest', 
            options: {
                name: 'gatsby-starter-default', 
                short_name: 'starter', 
                start_url: '/', 
                background_color: '#663399', 
                theme_color: '#663399', 
                display: 'minimal-ui', 
                icon: 'src/images/icon.png', 
            }, 
        }, 
        'gatsby-plugin-styled-components',
        'gatsby-transformer-remark',
    ],
};

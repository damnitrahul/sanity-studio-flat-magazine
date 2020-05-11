export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea93e0055e7e6bb36786eaf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nhfx2jny',
                  apiId: '53fb2bd5-52d4-48d2-8423-d71f0fd57553'
                },
                {
                  buildHookId: '5ea93e00b5370a16095aec7c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1bhgjdai',
                  apiId: '44a2cb72-ab82-4573-94e6-381fb17d5ac7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damnitrahul/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1bhgjdai.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

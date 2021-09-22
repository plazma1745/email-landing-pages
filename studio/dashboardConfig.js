export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '614aec366be7c97ce81a4412',
                  title: 'Sanity Studio',
                  name: 'email-landing-pages-studio',
                  apiId: 'c4db4ad8-0215-441f-b455-0b2b73e5c246'
                },
                {
                  buildHookId: '614aec366be7c97cae1a452e',
                  title: 'Landing pages Website',
                  name: 'email-landing-pages',
                  apiId: '4e80e1b0-4d2b-4448-a1c3-0cd26836218d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plazma1745/email-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://email-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

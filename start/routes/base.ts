import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.group(() => {
  Route.get('/', 'BaseController.home').as('home')

  if (!Application.inProduction) {
    Route.get('/errors/:any?', async ({ view, params }) => {
      switch (params.any) {
        case 'auth':
          return view.render('errors/auth', {
            title: 'test',
            description: 'lol',
          })
        default:
          return view.render('errors/not_found')
      }
    }).as('errors')
  }
}).as('base')

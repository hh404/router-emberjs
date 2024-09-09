

  import EmberRouter from '@ember/routing/router';  
  import config from './config/environment';  
  
  const Router = EmberRouter.extend({  
    location: config.locationType,  
    rootURL: config.rootURL,  
    
    routes: [  
      {  
        path: '/',  
        redirect: '/home'  
      },  
      {  
        path: '/home',  
        route: 'home'  
      },  
      {  
        path: '/about',  
        route: 'about'  
      }  
    ]  
  });  
  
  Router.map(function() {  
    this.route('home');  
    this.route('about');  
  });  
  
  export default Router;
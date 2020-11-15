import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes =[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },{
    path:'contact',
    component: ContactComponent
  },
  {
    path:'posts',
    // deprecated loadChildren: './pages/post/posts.module#PostModule'
    loadChildren: ()=> import('./pages/post/post.module').then( m => m.PostModule)
  },
  {
    path:'**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRountingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';

const routes:Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"post/:id",
    component: PostComponent
  },
  { path:"pages/:id",
    component:GenericPageComponent  
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
export class AppRoutingModule { }

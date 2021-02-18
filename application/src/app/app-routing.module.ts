import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TaskmanagerComponent } from './pages/taskmanager/taskmanager.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { AboutAngularComponent } from './about-angular/about-angular.component';
// import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskmanagerComponent },
  // { path: 'post/:id', component: PostComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

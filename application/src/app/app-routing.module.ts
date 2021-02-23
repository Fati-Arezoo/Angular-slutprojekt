import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TaskmanagerComponent } from './pages/taskmanager/taskmanager.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskmanagerComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

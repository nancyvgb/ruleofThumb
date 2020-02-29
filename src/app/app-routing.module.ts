import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';







const routes: Routes = [
  {path: 'past-trials', component: RedirectComponent},
  {path: 'how-it-works', component: RedirectComponent},
  { path: 'login', component: RedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

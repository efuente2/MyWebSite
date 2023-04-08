import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartComponent } from './start/start/start.component';

const routes: Routes = [
  {path: "start", component:StartComponent},
  {path: "about", component:AboutComponent},
  {path: "", redirectTo:"start", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

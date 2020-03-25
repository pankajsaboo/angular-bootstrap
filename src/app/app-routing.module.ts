import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompensationComponentComponent } from './compensation-component/compensation-component.component';


const routes: Routes = [
  { path: 'heroes', component: CompensationComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

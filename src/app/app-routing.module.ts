import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompensationComponentComponent } from './compensation-component/compensation-component.component';
import { DesputeResolutionComponent } from './despute-resolution/despute-resolution.component';
import { GeneralProvisionsComponent } from './general-provisions/general-provisions.component';


const routes: Routes = [
  { path: '', component: CompensationComponentComponent },
  { path: 'despute-resolution', component: DesputeResolutionComponent },
  { path: 'general-provisions', component: GeneralProvisionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

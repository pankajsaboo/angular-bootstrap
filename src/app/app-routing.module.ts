import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompensationComponentComponent } from './compensation-component/compensation-component.component';
import { DesputeResolutionComponent } from './despute-resolution/despute-resolution.component';
import { GeneralProvisionsComponent } from './general-provisions/general-provisions.component';
import { ProviderServicesComponent } from './provider-services/provider-services.component';
import { IntensiveOutpatientComponent } from './intensive-outpatient/intensive-outpatient.component';
import { ObservationComponent } from './observation/observation.component';
import { PartialHospitalizationComponent } from './partial-hospitalization/partial-hospitalization.component';
import { AetnaEnhancedGroupersComponent } from './aetna-enhanced-groupers/aetna-enhanced-groupers.component';


const routes: Routes = [
  { path: '', component: ProviderServicesComponent },
  { path: 'compensation', component: CompensationComponentComponent },
  { path: 'despute-resolution', component: DesputeResolutionComponent },
  { 
    path: 'general-provisions', 
    component: GeneralProvisionsComponent,
    children: [
      {
        path: '',
        component: IntensiveOutpatientComponent
      },
      {
        path: 'observation',
        component: ObservationComponent
      },
      {
        path: 'partial-hospitalization',
        component: PartialHospitalizationComponent
      },
      {
        path: 'aetna-enhaced-groupers',
        component: AetnaEnhancedGroupersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

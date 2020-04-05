import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompensationComponentComponent } from './compensation-component/compensation-component.component';
import { DesputeResolutionComponent } from './despute-resolution/despute-resolution.component';
import { GeneralProvisionsComponent } from './general-provisions/general-provisions.component';
import { ProviderServicesComponent } from './provider-services/provider-services.component';
import { GpRightMenuComponent } from './gp-right-menu/gp-right-menu.component';
import { IntensiveOutpatientComponent } from './intensive-outpatient/intensive-outpatient.component';
import { ObservationComponent } from './observation/observation.component';
import { PartialHospitalizationComponent } from './partial-hospitalization/partial-hospitalization.component';
import { AetnaEnhancedGroupersComponent } from './aetna-enhanced-groupers/aetna-enhanced-groupers.component';

@NgModule({
  declarations: [
    AppComponent,
    CompensationComponentComponent,
    DesputeResolutionComponent,
    GeneralProvisionsComponent,
    ProviderServicesComponent,
    GpRightMenuComponent,
    IntensiveOutpatientComponent,
    ObservationComponent,
    PartialHospitalizationComponent,
    AetnaEnhancedGroupersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

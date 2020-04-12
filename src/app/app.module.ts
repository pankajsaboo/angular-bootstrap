import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";  
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
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

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
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelModule,
    TableModule,
    CheckboxModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

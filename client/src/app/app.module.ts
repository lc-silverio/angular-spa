import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardTypeSelectorComponent } from './_components/card-type-selector/card-type-selector.component';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutQuantitySelectorComponent } from './_components/layout-quantity-selector/layout-quantity-selector.component';
import { SbsSelectorComponent } from './_components/sbs-selector/sbs-selector.component';
import { DatabaseSelectorComponent } from './_components/database-selector/database-selector.component';
import { ResultComponent } from './_components/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    CardTypeSelectorComponent,
    LayoutQuantitySelectorComponent,
    SbsSelectorComponent,
    DatabaseSelectorComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    MatStepperModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

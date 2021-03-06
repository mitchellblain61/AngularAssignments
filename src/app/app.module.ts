import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {ContentListComponent} from './content-list/content-list.component';
import {FilterTypePipe} from './filter-type.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HoverStyleDirective} from './hover-style.directive';
import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent, ContentCardComponent, ContentListComponent, FilterTypePipe, HoverStyleDirective, CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

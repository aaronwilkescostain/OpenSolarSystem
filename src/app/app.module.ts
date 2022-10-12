import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodiesComponent } from './components/bodies/bodies.component';
import { BodyItemComponent } from './components/body-item/body-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyItemMoreInfoComponent } from './components/body-item-more-info/body-item-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodiesComponent,
    BodyItemComponent,
    BodyItemMoreInfoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

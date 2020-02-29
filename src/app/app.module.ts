import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { PreviousRulingsComponent } from './previous-rulings/previous-rulings.component';
import { FooterAppThumbsComponent } from './footer-app-thumbs/footer-app-thumbs.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    PreviousRulingsComponent,
    FooterAppThumbsComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

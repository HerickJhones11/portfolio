import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SubServiceComponent } from './sub-service/sub-service.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { EndsComponent } from './ends/ends.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SubServiceComponent,
    AboutComponent,
    PortfolioComponent,
    ServiceComponent,
    WorkComponent,
    ContactComponent,
    EndsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

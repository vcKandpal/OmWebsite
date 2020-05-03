import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingEventComponent } from './components/upcoming-event/upcoming-event.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { TodaysThoughtComponent } from './components/todays-thought/todays-thought.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { SanskarComponent } from './components/sanskar/sanskar.component';
import { SchoolComponent } from './components/school/school.component';
import { GoshalaComponent } from './components/goshala/goshala.component';
import { SwavlambanComponent } from './components/swavlamban/swavlamban.component';
import { SahityaComponent } from './components/sahitya/sahitya.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { MapComponent } from './components/map/map.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpcomingEventComponent,
    ContactUsComponent,
    FooterComponent,
    JoinUsComponent,
    PopUpComponent,
    OurServiceComponent,
    CounterDisplayComponent,
    NavBarComponent,
    ImageGalleryComponent,
    TodaysThoughtComponent,
    OurTeamComponent,
    SanskarComponent,
    SchoolComponent,
    GoshalaComponent,
    SwavlambanComponent,
    SahityaComponent,
    ContactsListComponent,
    MapComponent,
    HomePageComponent,
    AboutUsComponent,
    ServicesComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingEventComponent } from './components/shared/upcoming-event/upcoming-event.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { OurServiceComponent } from './components/home/our-service/our-service.component';
import { CounterDisplayComponent } from './components/home/counter-display/counter-display.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
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
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { CarouselComponent } from './components/shared/video_carousel/carousel.component';
import { VideoPlayerComponent } from './components/shared/video-player/video-player.component';
import { CountUpModule } from 'ngx-countup';
// // // import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { ImageGalleryPageComponent } from './components/shared/image-gallery-page/image-gallery-page.component';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { BooksExhibitionComponent } from './components/books-exhibition/books-exhibition.component';
import { BeAVolunteerComponent } from './components/be-avolunteer/be-avolunteer.component';
import { ReadPipe } from './pipes/read.pipe';
import { StringLengthManagerPipe } from './pipes/string-length-manager.pipe';
import { DoAnimationDirective } from './directives/do-animation.directive';
import { ImgCarouselComponent } from './components/shared/img-carousel/img-carousel.component';
import { DonateUSComponent } from './components/donate-us/donate-us.component';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: {
      direction: Hammer.DIRECTION_ALL,
    },
  };
}

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
    VideoPlayerComponent,
    AboutUsPageComponent,
    ImageGalleryPageComponent,
    BooksExhibitionComponent,
    BeAVolunteerComponent,
    ReadPipe,
    StringLengthManagerPipe,
    DoAnimationDirective,
    ImgCarouselComponent,
    DonateUSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountUpModule,
    NgxGalleryModule,
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}

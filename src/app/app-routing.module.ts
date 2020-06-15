import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SanskarComponent } from './components/sanskar/sanskar.component';
import { SchoolComponent } from './components/school/school.component';
import { GoshalaComponent } from './components/goshala/goshala.component';
import { SwavlambanComponent } from './components/swavlamban/swavlamban.component';
import { BooksExhibitionComponent } from './components/books-exhibition/books-exhibition.component';
import { DonateUSComponent } from './components/donate-us/donate-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutUsComponent },
  {
    path: 'service',
    component: ServicesComponent,
    children: [
      { path: '', redirectTo: '/service/sanskar', pathMatch: 'full' },
      {
        path: 'sanskar',
        component: SanskarComponent,
      },
      {
        path: 'school',
        component: SchoolComponent,
      },
      {
        path: 'gaushala',
        component: GoshalaComponent,
      },
      {
        path: 'shavlabhan',
        component: SwavlambanComponent,
      },
      {
        path: 'booksExhibition',
        component: BooksExhibitionComponent,
      },
    ],
  },
  { path: 'gallery', component: ImageGalleryComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'donateUs', component: DonateUSComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

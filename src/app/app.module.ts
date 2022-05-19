import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './banner/banner.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { HeroComponent } from './hero/hero.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { DrunkComponent } from './drunk/drunk.component';
import { ProgressComponent } from './progress/progress.component';
import { HeroImageComponent } from './hero-image/hero-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LogoComponent,
    NavBarComponent,
    AvatarComponent,
    HeroComponent,
    ButtonsComponent,
    WineListComponent,
    DrunkComponent,
    ProgressComponent,
    HeroImageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

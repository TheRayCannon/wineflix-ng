import { Component } from '@angular/core';
import { heroContent } from 'src/goliath';
@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent  {

  heroContent = heroContent

}

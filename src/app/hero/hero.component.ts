import { Component } from '@angular/core';
import { heroContent } from 'src/goliath';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  heroContent = heroContent

}

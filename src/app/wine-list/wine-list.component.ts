import { Component} from '@angular/core';
import { wines } from 'src/wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent  {

  wines = wines

}

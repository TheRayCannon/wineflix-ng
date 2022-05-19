import { Component} from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  faPlay = faPlay
  faInfoCircle = faInfoCircle

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drunk',
  templateUrl: './drunk.component.html',
  styleUrls: ['./drunk.component.css']
})
export class DrunkComponent  {


 @Input() imageUrl!: string;
 @Input() isNew?: boolean;
 @Input() label!: string;
 @Input() isFinished?: boolean;
 @Input() progress?: number;

}

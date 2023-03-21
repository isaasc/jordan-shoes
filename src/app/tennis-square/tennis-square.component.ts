import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tennis-square',
  templateUrl: './tennis-square.component.html',
  styleUrls: ['./tennis-square.component.scss']
})
export class TennisSquareComponent {
  @Input() imageSrc: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-card-inline',
  templateUrl: './group-card-inline.component.html',
  styleUrls: ['./group-card-inline.component.css']
})
export class GroupCardInlineComponent {
 @Input() title:string = ""
}

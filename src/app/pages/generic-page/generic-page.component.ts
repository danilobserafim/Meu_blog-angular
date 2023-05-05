import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.css']
})
export class GenericPageComponent implements OnInit {
  name:string | null = '' 
  constructor(
    private route : ActivatedRoute
  ){
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(value =>{
      this.name = value.get("id")
    })
  }
}

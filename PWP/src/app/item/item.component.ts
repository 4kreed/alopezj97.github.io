import { Component, OnInit } from '@angular/core';
import { CustomNumber } from '../customNumber';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  myItems = ITEMS;
  
  constructor() { }

  ngOnInit(): void {
  }

}

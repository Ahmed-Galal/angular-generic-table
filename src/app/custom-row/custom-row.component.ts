import { Component, OnInit } from '@angular/core';
import {GtExpandedRow} from '../../generic-table/components/gt-expanding-row.component';

@Component({
  selector: 'app-custom-row',
  template: require('./custom-row.component.html')
})
export class CustomRowComponent extends GtExpandedRow<any> implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }

  public newRandomColor = function()
  {
    this.row.favorite_color = '#000'.replace(/0/g,f=>'0369cf'[Math.random()*6|0]);
  };

}

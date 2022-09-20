import {Component} from '@angular/core';

@Component({
  selector: 'app-property-card',
  //template: ``,
  templateUrl: 'property-card-component.html',
  //styles: [    ''  ],
  styleUrls : ['property-card-component.css']
})
export class PropertyCardComponent{
  PropertyObj: any = {
    "Id": 1,
    "Type": "House",
    "Price": "12000",
    "Name": "Jaya Opal"
  }
}

import { Component } from "@angular/core";

@Component({
  selector: 'property-card',
  templateUrl: './property-card.html',
  styleUrls: ['./property-card.css'],
  standalone: true
})
export class PropertyCard {
  Property: any = {
    Id: 1,
    Type: "House",
    Price: 250000
  };
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCard } from './property-card/property-card';
import { PropertyList } from './property-list/property-list';
import { NavBar } from "./nav-bar/nav-bar";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropertyCard, PropertyList, NavBar], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Fixed: should be styleUrls (plural)
})
export class App {
  protected title = 'my-first-app';
}

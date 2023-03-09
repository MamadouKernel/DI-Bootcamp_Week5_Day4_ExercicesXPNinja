import {Component} from '@angular/core';
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../models/flight";

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {
  private flights!: Flight[];

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights = this.flightService.getMyFlights();
    this.getFlightsData();
  }

  // get the data from backend service api
  private getFlightsData() {
    this.flightService.getFlightsData().subscribe(data => {
      this.flights = data;
    });
  }
}

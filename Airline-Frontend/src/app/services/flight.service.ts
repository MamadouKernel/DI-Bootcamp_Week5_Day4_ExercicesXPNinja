import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Flight} from "../models/flight";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private MYFLIGHTS: Flight[] = [
    {
      id: 11,
      flightNumber: "FS1298",
      origin: "LAX",
      destination: "LHR",
      departDay: "Thursday",
      departTime: "09:00",
      arriveDay: "Monday",
      arriveTime: "09:00",
      price: 99.99,
    },
    {
      id: 12,
      flightNumber: "FS1201",
      origin: "LAX",
      destination: "LHR",
      departDay: "Friday",
      departTime: "09:00",
      arriveDay: "Monday",
      arriveTime: "09:00",
      price: 99.99,
    },
  ];

  constructor(private http: HttpClient) {}

  // to test with local mock data
  public getMyFlights(): Flight[] {
    return this.MYFLIGHTS;
  }

  // to test with service api
  public getFlightsData() : Observable<Flight[]>{
    let url = "http://localhost:8080/api/flights";
    return this.http.get<Flight[]>(url);
  }

}

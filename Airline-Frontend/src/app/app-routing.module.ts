import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FlightComponent} from "./components/flight/flight.component";

const routes: Routes = [{path: "", component: FlightComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

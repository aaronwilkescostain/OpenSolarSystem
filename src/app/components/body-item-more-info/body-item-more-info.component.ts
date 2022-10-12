import { Component, OnInit, Input} from '@angular/core';
import {BodiesService} from '../../services/bodies.service';
import {BodyInfo} from '../../bodyInfo';

declare var window: any;
declare var Swal: any;

@Component({
  selector: 'app-body-item-more-info',
  templateUrl: './body-item-more-info.component.html',
  styleUrls: ['./body-item-more-info.component.css']
})
export class BodyItemMoreInfoComponent implements OnInit {
  @Input() buttonText:string = "";
  @Input() bodyName:string = "none";
  body: BodyInfo = {} as BodyInfo;
  modal: any;

  constructor(private bodiesService: BodiesService) { }

  ngOnInit(): void {
  }

  getInfo() {
    this.modal = new window.bootstrap.Modal(document.getElementById("modalShowInfo"));
    this.bodiesService.getBody(this.bodyName).subscribe({next: (body) => {
      if(body) {
        this.updateModal(body);
        this.modal.show();
      } else {
        this.showError("500 Internal Server Error");
      }
    }, error: error => {
      if(error.status === 404) {
        this.showError("404 Page Not Found");
      } else if(error.status === 403) {
        this.showError("403 Access Denied");
      }
    }});
  }

  showError(message: string) {
    Swal.fire(
      'Error...',
      message,
      'error'
    )
  }
  updateModal(body: BodyInfo) {
    const allNames = document.querySelectorAll(".name");
    allNames.forEach((name) => name.innerHTML = body.name);
    const allEnglishNames = document.querySelectorAll(".englishName");
    allEnglishNames.forEach((englishName) => englishName.innerHTML = body.englishName);
    const allIsPlanets = document.querySelectorAll(".isPlanet");
    allIsPlanets.forEach((isPlanet) => isPlanet.innerHTML = body.isPlanet ? "Yes" : "No");
    const allInclinations = document.querySelectorAll(".inclination");
    allInclinations.forEach((inclination) => inclination.innerHTML = String(body.inclination));
    const allDensities = document.querySelectorAll(".density");
    allDensities.forEach((density) => density.innerHTML = String(body.density));
    const allGravities = document.querySelectorAll(".gravity");
    allGravities.forEach((gravity) => gravity.innerHTML = String(body.gravity));
    const allMeanRadiuses = document.querySelectorAll(".meanRadius");
    allMeanRadiuses.forEach((meanRadius) => meanRadius.innerHTML = String(body.meanRadius));
    const allPolarRadiuses = document.querySelectorAll(".polarRadius");
    allPolarRadiuses.forEach((polarRadius) => polarRadius.innerHTML = String(body.polarRadius));
    const allAxialTilts = document.querySelectorAll(".axialTilt");
    allAxialTilts.forEach((axialTilt) => axialTilt.innerHTML = String(body.axialTilt));
    const allAverageTemperatures = document.querySelectorAll(".averageTemperature");
    allAverageTemperatures.forEach((averageTemperature) => averageTemperature.innerHTML = String(body.avgTemp) + "&nbsp;K (" + this.KtoC(body.avgTemp) + " &deg;C / " + this.KtoF(body.avgTemp) + " &deg;F)");
  }

  KtoC(K: number): number {
    const KConv: number = (K - 273.15);
    return Number(KConv.toFixed(2));
 }

 KtoF(K: number): number {
  const KConv: number = ((K - 273.15) * 1.8) + 32;
  return Number(KConv.toFixed(2));
 }
}

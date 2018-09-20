import { Component } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageObject0 = {};
  imageObject1 = {};
  imageObject2 = {};
  imageObject3 = {};
  imageObject4 = {};
  imageObject5 = {};
  imageObject6 = {};
  imageObject7 = {};
  imageObject8 = {};
  coordinateArr = [];
  errorMsgBool = false;
  errorMsg = "";
  renderImg = false;
  parsedLatInt = 0;
  parsedLongInt = 0;
  finalCoords = "";
  constructor(private _dataService: DataService) {
  }
  RetrieveImages(coordinates) {

    this.coordinateArr = this._dataService.CalculateAllCoordinates(coordinates.trim());

    for (let i = 0; i < this.coordinateArr.length; i++) {
      this._dataService.RetrieveImage(this.coordinateArr[i]).subscribe(data => {
        this["imageObject" + i] = data;
        this.errorMsg = "";
        this.renderImg = true;
      },
        error => {
          this.errorMsgBool = true;
          this.errorMsg = "Sorry, it appears the coordinates you entered could not render an image! Please try again. Examples: 100.75,1.5 or 78,9";
          this.renderImg = false;
        });;
    }
  }
}

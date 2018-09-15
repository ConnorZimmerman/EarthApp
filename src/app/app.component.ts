import { Component } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageObject = {};
  errorMsgBool = false;
  errorMsg = "";
  renderImg = false;
  constructor(private _dataService: DataService) {
  }
  RetrieveImage(coordinates) {
    this._dataService.RetrieveImage(coordinates.trim()).subscribe(data => {
      this.imageObject = data;
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

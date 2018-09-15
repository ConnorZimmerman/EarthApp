import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  RetrieveImage(coordinates) {
    return this.http.get("https://api.nasa.gov/planetary/earth/imagery?lon=" + this.ParseLong(coordinates) + "&lat=" + this.ParseLat(coordinates) + "&api_key=AQOHiLBfEMzpZOFKLs73L3LGGJjfqFu3JOZmZpwr");
  }

  ParseLong(coordinates) {
    let x = "";
    for (let digit of coordinates) {
      if (digit != ",") {
        x += digit;
      }
      else {
        break;
      }
    }
    return x;
  }

  ParseLat(coordinates) {
    let y = "";
    var latCheck = false;
    for (let digit of coordinates) {
      if (latCheck) {
        y += digit;
      }

      if (digit == ",") {
        latCheck = true;
      }
    }
    return y;
  }
}

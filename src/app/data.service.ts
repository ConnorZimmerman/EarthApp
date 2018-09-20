import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  RetrieveImage(coordinates) {
    return this.http.get("https://api.nasa.gov/planetary/earth/imagery?lon=" + this.ParseLong(coordinates) + "&lat=" + this.ParseLat(coordinates) + "&api_key=AQOHiLBfEMzpZOFKLs73L3LGGJjfqFu3JOZmZpwr");
  }

  CalculateAllCoordinates(coordinates) {
    let coordinatesArr = [];
    for (let i = 0; i < 9; i++) {
      let parsedLongInt = 0;
      let parsedLatInt = 0;
      let finalCoords = "";
      coordinatesArr.push(this.CalculateCoordinate(i, coordinates, parsedLongInt, parsedLatInt, finalCoords));
    }
    return coordinatesArr;
  }

  CalculateCoordinate(counter, coordinates, parsedLongInt, parsedLatInt, finalCoords) {
    switch (counter) {
      // Top 1
      case 0:
      parsedLatInt = parseInt(this.ParseLat(coordinates));
      parsedLongInt = parseInt(this.ParseLong(coordinates));

      parsedLongInt -= 0.025;
      parsedLatInt += 0.025;

      finalCoords = parsedLongInt.toString() + ",";
      finalCoords += parsedLatInt.toString();
      return finalCoords;

      // Top 2
      case 1:
      parsedLatInt = parseInt(this.ParseLat(coordinates));
      parsedLongInt = parseInt(this.ParseLong(coordinates));

      parsedLatInt += 0.025;

      finalCoords = parsedLongInt.toString() + ",";
      finalCoords += parsedLatInt.toString();
      return finalCoords;

      // Top 3
      case 2:
      parsedLatInt = parseInt(this.ParseLat(coordinates));
      parsedLongInt = parseInt(this.ParseLong(coordinates));

      parsedLongInt += 0.025;
      parsedLatInt += 0.025;

      finalCoords = parsedLongInt.toString() + ",";
      finalCoords += parsedLatInt.toString();
      return finalCoords;

      // Center 1
      case 3:
        parsedLatInt = parseInt(this.ParseLat(coordinates));
        parsedLongInt = parseInt(this.ParseLong(coordinates));

        parsedLongInt -= 0.025;

        finalCoords = parsedLongInt.toString() + ",";
        finalCoords += parsedLatInt.toString();
        return finalCoords;

      // Center 2
      case 4:
        return coordinates;

      // Center 3
      case 5:
        parsedLatInt = parseInt(this.ParseLat(coordinates));
        parsedLongInt = parseInt(this.ParseLong(coordinates));

        parsedLongInt += 0.025;

        finalCoords = parsedLongInt.toString() + ",";
        finalCoords += parsedLatInt.toString();
        return finalCoords;

      // Bottom 1
      case 6:
      parsedLatInt = parseInt(this.ParseLat(coordinates));
      parsedLongInt = parseInt(this.ParseLong(coordinates));

      parsedLongInt -= 0.025;
      parsedLatInt -= 0.025;

      finalCoords = parsedLongInt.toString() + ",";
      finalCoords += parsedLatInt.toString();
      return finalCoords;

      // Bottom 2
      case 7:
      parsedLatInt = parseInt(this.ParseLat(coordinates));
      parsedLongInt = parseInt(this.ParseLong(coordinates));

      parsedLatInt -= 0.025;

      finalCoords = parsedLongInt.toString() + ",";
      finalCoords += parsedLatInt.toString();
      return finalCoords;

      // Bottom 3
      case 8:
      parsedLatInt = parseInt(this.ParseLat(coordinates));
      parsedLongInt = parseInt(this.ParseLong(coordinates));

      parsedLongInt += 0.025;
      parsedLatInt -= 0.025;

      finalCoords = parsedLongInt.toString() + ",";
      finalCoords += parsedLatInt.toString();
      return finalCoords;
    }
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

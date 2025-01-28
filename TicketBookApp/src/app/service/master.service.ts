import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl : string = 'https://projectapi.gerasim.in/api/BusBooking/'
  constructor(private http : HttpClient) { }

  getLocation():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl +"GetBusLocations")
  }
  SearchBus(from:number,to:number,traveldate:string){
    return this.http.get<any[]>(`${this.apiUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${traveldate}`)
  }
}

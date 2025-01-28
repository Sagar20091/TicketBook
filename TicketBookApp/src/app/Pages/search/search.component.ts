import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locationNames:any[]=[];
  searchObj :any={
    fromLocation :'',
    toLocation :'',
    travelDate:''
  }
  busList: any[]=[];
  constructor(private service : MasterService){
    

  }
  ngOnInit(): void {
    this.getBusLocation();
  }

  getBusLocation(): void {
    this.service.getLocation().subscribe((res) => {
      this.locationNames = res.map((location) => {
        return location.locationName

      }
      )
      console.log(this.locationNames)
    })
  }

  searchBuses(){
    const {fromLocation,toLocation,travelDate}=this.searchObj;
    console.log(this.searchObj)
    this.service.SearchBus(fromLocation,toLocation,travelDate).subscribe((res:any)=>{
      this.busList=res;
      console.log(this.busList)
    })
  }

}

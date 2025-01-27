import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locationNames:any[]=[];
  constructor(private service : MasterService){
    

  }
  ngOnInit(): void {
    this.getBusLocation();
  }

  getBusLocation():void{
    this.service.getLocation().subscribe((res)=>{
      this.locationNames=res.map((location)=>{
        return         location.locationName

      }
      )
      console.log(this.locationNames)
    })
  }

}

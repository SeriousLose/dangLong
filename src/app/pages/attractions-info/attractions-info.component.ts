import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from '../../services/total-service.service';

@Component({
  selector: 'app-attractions-info',
  templateUrl: './attractions-info.component.html',
  styleUrls: ['./attractions-info.component.less']
})
export class AttractionsInfoComponent implements OnInit {

  constructor(
    private totalSer:TotalServiceService
  ) {
   
   }

  ngOnInit() { }
  
}

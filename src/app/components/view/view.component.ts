import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/interfaces/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Model: any;
  Model2: any;
  Model3: any;
  Search: any;
  constructor(private api: ApiService) { 
    
  }

  ngOnInit(): void {
     this.api.get2().subscribe(data => console.log(data))
    this.api.get().subscribe(data => this.Model = data)
    this.api.get2().subscribe(data => this.Model2 = data)
    this.api.get3().subscribe(data => this.Model3 = data)

  }

}

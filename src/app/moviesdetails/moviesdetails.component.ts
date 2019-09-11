import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { promise } from 'protractor';
import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.css']
})
export class MoviesdetailsComponent implements OnInit {

  showdetials=[]

  constructor( private HomeService: HomeService ) { }

  ngOnInit() {
  }


  getflim(event){
    const detail = event.imdb;
    this.HomeService.detailsfilm(detail);
  }

}

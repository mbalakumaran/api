import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes=[]

  constructor(private HomeService: HomeService) { }

  ngOnInit() {
  }

  getflim(event){
    const filme = event.target.value;
    this.HomeService.showfilm(filme).then(res => {
    this.filmes = res.Search;
    })
  }
}

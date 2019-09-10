import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { Response } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apikey: string;
  url:string;

  constructor( private http: HttpClient ) { 
    this.apikey = "69a16124";
    this.url = "http://www.omdbapi.com/?apikey=";
  }

  showfilm(name: string): promise<any>{
    return this.http.get(this.url + this.apikey + '&s=' + name).toPromise();
    // const urlfilm = "this.url + this.apikey + '&s=' + name";{
    //   return this.http.get(this.urlfilm)
    //   .map((res = Response)=>{

    //   })
    // }
  }
  
}

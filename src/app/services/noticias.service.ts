import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http:HttpClient) { }


  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?q=apple&from=2022-10-26&to=2022-10-26&sortBy=popularity&apiKey=d8417f847f1c438aa22945d567dc0610')
  }
}

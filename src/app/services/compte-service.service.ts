import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Models/Compte.Model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  public  Getcheque(vari): Observable<Array<Compte>>{
    let id = localStorage.getItem("id");
    return this.httpClient.get<Array<Compte>>("http://localhost:8080/Client/"+id+"/chequecomptes");
  }
  public Getepargne(vari): Observable<Array<Compte>>{
    let id = localStorage.getItem("id");
    return this.httpClient.get<Array<Compte>>("http://localhost:8080/Client/"+id+"/epargnecomptes");
  }
  constructor(private httpClient:HttpClient) { }
  public Getallepargne(vari):any{
    return this.httpClient.get("http://localhost:8080/Client/"+vari+"/epargnecomptes");
  }
  public Getallcheque(vari):any{
    return this.httpClient.get("http://localhost:8080/Client/"+vari+"/chequecomptes");
  }
  public Getepargneid(vari){
    return this.httpClient.get("http://localhost:8080/epargne/"+vari);
  }
  public Getchequeid(vari){
    return this.httpClient.get("http://localhost:8080/cheque/comptes/"+vari);
  }
  public getAccountIdByNA(vari){
    return this.httpClient.get("http://localhost:8080/transaction/idaccount/"+vari);
  }
}


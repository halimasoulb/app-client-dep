import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requestcb } from '../Models/Requestcb';

@Injectable({
  providedIn: 'root'
})
export class RequestCarteService {

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post("http://localhost:8080/requestCartCredit/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete("http://localhost:8080/requestCartCredit/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get("http://localhost:8080/requestCartCredit/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put("http://localhost:8080/requestCartCredit/terminer/"+vari,data)
  }
  // a revoir
  public voircartes(vari){
    return this.httpClient.get<Requestcb[]>("http://localhost:8080/requestCartCredit/ByCompte/"+vari)
  }
}

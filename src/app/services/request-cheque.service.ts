import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{requestcc} from '../Models/requestcc';
import {compteCheque} from '../Models/compteCheque';

@Injectable({
  providedIn: 'root'
})
export class RequestChequeService {

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post("http://localhost:8080/requestCC/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete("http://localhost:8080/requestCC/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get("http://localhost:8080/requestCC/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put("http://localhost:8080/requestCC/update/"+vari,data)
  }
  public voircartes(vari){
    return this.httpClient.get<requestcc[]>("http://localhost:8080/requestCC/ByClient/"+vari)
  }

  public getCompteCheckByClient(vari){
    return this.httpClient.get<compteCheque[]>("http://localhost:8080/cheque/comptes/client/"+vari)
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/Transaction.Model';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private httpClient:HttpClient) { } 
  public Gettransactions(vari){
    return this.httpClient.get("http://localhost:8080/transaction/account/"+vari);
  }
  public Gettransaction(vari){
    return this.httpClient.get("http://localhost:8080/transaction/transactions/"+vari);
  }
  public fairetransaction(receiver,sender,data){
    return this.httpClient.post("http://localhost:8080/transaction/sendTransaction/"+receiver+"/"+sender,data)
  }
  public Gettransactionsender(vari){
    return this.httpClient.get<Array<Transaction>>("http://localhost:8080/transaction/senderAccount/"+vari);
  }
  public Gettransactionreceiver(vari){
    return this.httpClient.get<Array<Transaction>>("http://localhost:8080/transaction/receiverAccount/"+vari);
  }
}

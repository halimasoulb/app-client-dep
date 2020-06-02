import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { Router } from '@angular/router';
import { Compte } from 'src/app/Models/Compte.Model';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { CompteService } from 'src/app/services/compte-service.service';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {
  variab:string="epargne";
  ccompte:Compte=null;
  comptes:Array<Compte>
  totalRecords:string;
  page: number=1;
  showVar:boolean=true;
  //@Input() compte:Array<Compte>
  @Input() test:Array<Compte>;
  @Input() epargne:Array<Compte>;
  id:any;
  
    constructor(private compteServ : CompteService, private _clientService : ClientDataService
      , private _authSerivce : AuthenticationServiceService
      ,private _router :Router) { }
    ngOnInit(): void {
      this.comptes=this.test;
     
    }
  
    voircheques(){
      
      this.comptes=this.test;
      this.ccompte=null;
      this.page=1;
     // this._router.navigate(['/comptes']); 
     // location.reload();
      
    }
   
    voirepargnes(){
      
      this.comptes=this.epargne;
      this.ccompte=null;
      this.page=1;
     // this._router.navigate(['/comptes']); 
      //location.reload();
     
    }
     select(comppptes){
      
       this.ccompte=comppptes;
    }

}

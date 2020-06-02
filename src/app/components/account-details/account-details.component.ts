import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

   
  constructor() { }
  @Input()compte:Compte
  ngOnInit(): void {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
//import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {DemoMaterialModule} from '../../material-module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarteBComponent} from './components/carte-b/carte-b.component'
import { CarteBancaireComponent } from './components/request/carte-bancaire/carte-bancaire.component';
import { CchequeComponent } from './components/request/ccheque/ccheque.component';
import { LoginFormComponent } from './components/login/login-form.component';
import { Interceptor } from './Interceptors/HttpInterceptor';
import { HTTPListener } from './Interceptors/HttpInterceptor2';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component'
import { LogoutComponent } from './components/logout/logout.component';
import { RequestComponent } from './components/request/request.component';
import { PassDataService } from './services/pass-data.service';
import { AuthenticationServiceService } from './Services/authentication-service.service';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountActivityChartComponent } from './components/account-activity-chart/account-activity-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ChartsModule } from 'ng2-charts';
import { DashboardnavComponent } from './components/dashboardnav/dashboardnav.component';
import { DashboardAccountTableComponent } from './components/dashboard-account-table/dashboard-account-table.component';
import { DashrecentActivitiesComponent } from './components/dashrecent-activities/dashrecent-activities.component';
import { NgpSortModule } from "ngp-sort-pipe";
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { AccountsTableTransactionsComponent } from './components/accounts-table-transactions/accounts-table-transactions.component';
import { TransactionsHistoryComponent } from './components/transactions-history/transactions-history.component';
import { TransactionsHistoryTableComponent } from './components/transactions-history-table/transactions-history-table.component';
import { SimulationCreditComponent } from './components/simulation-credit/simulation-credit.component';
import { RibComponent } from './components/rib/rib.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginFormComponent,
    NavbarComponent,
    ProfileComponent,
    CarteBancaireComponent,
    CchequeComponent,
    LogoutComponent,
    RequestComponent,
    CarteBComponent,
    AccountsTableComponent,
    AccountDetailsComponent,
    AccountsComponent,
    AccountActivityChartComponent,
    DashboardComponent,
    DashboardnavComponent,
    DashboardAccountTableComponent,
    DashrecentActivitiesComponent,
    AddTransactionComponent,
    AccountsTableTransactionsComponent,
    TransactionsHistoryComponent,
    TransactionsHistoryTableComponent,
    SimulationCreditComponent,
    RibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgpSortModule,
    FormsModule, HttpClientModule, BrowserAnimationsModule,
    MatNativeDateModule,DemoMaterialModule,
    ReactiveFormsModule,
    ChartsModule

  ],
  providers: [AuthenticationServiceService,{
    provide : HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass: HTTPListener,
    multi : true
  },
  PassDataService,

  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

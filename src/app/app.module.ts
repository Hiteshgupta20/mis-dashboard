import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './modules/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule ,MatChipsModule,MatAutocompleteModule,MatIconModule} from '@angular/material';
import { DashboardService } from './modules/dashboard.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GmvcountComponent } from './modules/gmvcount/gmvcount.component';
import { CashflowComponent } from './modules/cashflow/cashflow.component';
import { IncomesheetComponent } from './modules/incomesheet/incomesheet.component';
import { BalancesheetComponent } from './modules/balancesheet/balancesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GmvcountComponent,
    CashflowComponent,
    IncomesheetComponent,
    BalancesheetComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule ,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatAutocompleteModule ,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

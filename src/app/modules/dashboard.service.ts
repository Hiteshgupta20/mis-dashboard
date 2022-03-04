import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { PeriodicElement } from "./dashboard/dashboard.model";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private http:HttpClient) {}
getdata(data){
  let url=`https://mis.nownowpay.com.ng/mis/getCategoryByEntityTypeAndYear?entityType=${data.entityType}&startYear=${data.startYear}&endYear=${data.endYear}`
  return this.http.get(url);
}
getdatamonth(data){
  let url=`https://mis.nownowpay.com.ng/mis/findByEntityTypeAndMonth?startYear=${data.startYear}&entityType=${data.entityType}`
  return this.http.get(url);
}
getdatagmv(data){
  let url=`https://mis.nownowpay.com.ng/mis/getCategoryByYear?startYear=${data.startYear}&endYear=2022`
  return this.http.get(url);
}
getdatacash(data){
  let url=`https://mis.nownowpay.com.ng/mis/getCashFlowStatementByYear?startYear=${data.startYear}&endYear=${data.endYear}`
  return this.http.get(url);
}
getdataincome(data){
  let url=`https://mis.nownowpay.com.ng/mis/getIncomeStatementServiceByYear?startYear=${data.startYear}&endYear=${data.endYear}`
  return this.http.get(url);
}
getdatabalance(data){
  let url=`https://mis.nownowpay.com.ng/mis/getBalanceSheetByYear?startYear=${data.startYear}&endYear=${data.endYear}`
  return this.http.get(url);
}
  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}

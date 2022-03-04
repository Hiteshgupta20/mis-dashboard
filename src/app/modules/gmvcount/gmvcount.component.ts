import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-gmvcount',
  templateUrl: './gmvcount.component.html',
  styleUrls: ['./gmvcount.component.scss']
})
export class GmvcountComponent implements OnInit {
  displayedColumns = ['count','category','jan',
  'feb', 
  // 'mar', 
  // 'apr', 
  // 'may', 
  // 'jun', 
  // 'jul', 
  // 'aug', 
  // 'sep', 
  // 'oct', 
  // 'nov', 
  // 'dec', 
  //  'total'
];
startYear: any = [{ year: "2012", value: "2012-01-01" },
  { year: "2013", value: "2013-01-01" },
  { year: "2014", value: "2014-01-01" },
  { year: "2015", value: "2015-01-01" },
  { year: "2016", value: "2016-01-01" },
  { year: "2017", value: "2017-01-01" },
  { year: "2018", value: "2018-01-01" },
  { year: "2019", value: "2019-01-01" },
  { year: "2020", value: "2020-01-01" },
  { year: "2021", value: "2021-01-01" },
  { year: "2022", value: "2022-01-01" },
  ];
  dropdown = new FormGroup({
    entityType: new FormControl(""),
    startYear: new FormControl(""),
  })
  datalist: any;
  dataToShow: any = [];
  categoryNamelist: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }
  getdatamonth() {
    let req: any = {
      'entityType': this.dropdown.controls['entityType'].value,
      'startYear': this.dropdown.controls['startYear'].value,
    }
    console.log(req);
    this.dashboardService.getdatamonth(req).subscribe((data: any) => {
      console.log(data)
      if (data.statusCode == 200) {
        let res = data.body
        this.datalist = res;
        let categoryMonthly = Object.keys(this.datalist[0].categoryCountByMonth);
        
        for(let i =0;i<categoryMonthly.length;i++)
          this.dataToShow.push({
            entityType: this.datalist[0].entityType,
            category: categoryMonthly[i],
            count:this.datalist[0].categoryCount
          }
          );
          console.log(this.dataToShow);
          
        
        this.categoryNamelist= Object.keys(data.body[0].categoryCountByMonth)
        console.log(this.categoryNamelist);
        
      }



    })

  }
}
